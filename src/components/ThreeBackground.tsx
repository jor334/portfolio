import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initialized.current) return;
    initialized.current = true;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f9ff);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    // Particles
    const particlesGeo = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
      vels[i] = (Math.random() - 0.5) * 0.02;
    }
    
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particlesGeo, new THREE.PointsMaterial({
      size: 0.08, color: 0x7dd3fc, transparent: true, opacity: 0.65
    }));
    scene.add(particles);

    // Drone
    const drone = new THREE.Group();
    
    // Materiales
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xff6b35, metalness: 0.7, roughness: 0.3 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, metalness: 0.8, roughness: 0.2 });
    const armMat = new THREE.MeshStandardMaterial({ color: 0x3d3d3d, metalness: 0.6, roughness: 0.4 });
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.6 });
    
    // Cuerpo central
    const bodyGroup = new THREE.Group();
    
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.5), bodyMat);
    body.position.y = 0.05;
    bodyGroup.add(body);
    
    const topCover = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.4), darkMat);
    topCover.position.y = 0.19;
    bodyGroup.add(topCover);
    
    const bottomPlate = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.05, 0.45), darkMat);
    bottomPlate.position.y = -0.07;
    bodyGroup.add(bottomPlate);
    
    drone.add(bodyGroup);
    
    // Cámara/Gimbal
    const gimbal = new THREE.Group();
    const gimbalMount = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.08, 16), darkMat);
    gimbalMount.position.y = -0.15;
    gimbal.add(gimbalMount);
    
    const cameraLens = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), new THREE.MeshStandardMaterial({ 
      color: 0x1e293b, metalness: 0.95, roughness: 0.05 
    }));
    cameraLens.position.set(0, -0.2, 0.05);
    gimbal.add(cameraLens);
    drone.add(gimbal);
    
    // LEDs
    const ledGreen1 = new THREE.Mesh(new THREE.SphereGeometry(0.03), new THREE.MeshBasicMaterial({ color: 0x22c55e }));
    ledGreen1.position.set(0.15, 0.05, 0.26);
    drone.add(ledGreen1);
    
    const ledGreen2 = new THREE.Mesh(new THREE.SphereGeometry(0.03), new THREE.MeshBasicMaterial({ color: 0x22c55e }));
    ledGreen2.position.set(-0.15, 0.05, 0.26);
    drone.add(ledGreen2);
    
    const ledRed1 = new THREE.Mesh(new THREE.SphereGeometry(0.03), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    ledRed1.position.set(0.15, 0.05, -0.26);
    drone.add(ledRed1);
    
    const ledRed2 = new THREE.Mesh(new THREE.SphereGeometry(0.03), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    ledRed2.position.set(-0.15, 0.05, -0.26);
    drone.add(ledRed2);
    
    const ledFront = ledGreen1;
    const ledBack = ledRed1;
    
    // Brazos y motores
    const propellers: THREE.Group[] = [];
    const motorDist = 0.7;
    
    const corners = [
      { x: motorDist, z: motorDist },
      { x: -motorDist, z: motorDist },
      { x: motorDist, z: -motorDist },
      { x: -motorDist, z: -motorDist },
    ];
    
    corners.forEach((corner) => {
      const armLength = Math.sqrt(corner.x * corner.x + corner.z * corner.z) - 0.2;
      const angle = Math.atan2(corner.x, corner.z);
      
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, armLength, 8),
        armMat
      );
      
      arm.position.set(corner.x * 0.5, 0.02, corner.z * 0.5);
      arm.rotation.order = 'YXZ';
      arm.rotation.x = Math.PI / 2;
      arm.rotation.y = angle;
      
      drone.add(arm);
      
      const motorMount = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.12, 0.05, 16),
        darkMat
      );
      motorMount.position.set(corner.x, 0.05, corner.z);
      drone.add(motorMount);
      
      const motor = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.08, 16),
        darkMat
      );
      motor.position.set(corner.x, 0.11, corner.z);
      drone.add(motor);
      
      const propGroup = new THREE.Group();
      propGroup.position.set(corner.x, 0.17, corner.z);
      
      const blade1 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.01, 0.05), bladeMat);
      const blade2 = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.01, 0.05), bladeMat);
      blade2.rotation.y = Math.PI / 2;
      
      propGroup.add(blade1, blade2);
      propellers.push(propGroup);
      drone.add(propGroup);
      
      const guard = new THREE.Mesh(
        new THREE.TorusGeometry(0.26, 0.01, 8, 24),
        new THREE.MeshStandardMaterial({ color: 0x4b5563, metalness: 0.5, roughness: 0.5 })
      );
      guard.rotation.x = Math.PI / 2;
      guard.position.set(corner.x, 0.15, corner.z);
      drone.add(guard);
    });
    
    // Patas de aterrizaje
    const legMat = new THREE.MeshStandardMaterial({ color: 0x374151 });
    [{ x: 0.2, z: 0.25 }, { x: -0.2, z: 0.25 }, { x: 0.2, z: -0.25 }, { x: -0.2, z: -0.25 }].forEach(pos => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.15, 8), legMat);
      leg.position.set(pos.x, -0.17, pos.z);
      drone.add(leg);
      
      const foot = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), legMat);
      foot.position.set(pos.x, -0.25, pos.z);
      drone.add(foot);
    });

    drone.position.set(0, 1, 0);
    scene.add(drone);

    // Animation state
    let time = 0;
    let ledOn = true;
    
    // LED blink interval
    const ledBlink = setInterval(() => {
      ledOn = !ledOn;
      ledFront.visible = ledOn;
      ledBack.visible = !ledOn;
    }, 400);

    // Main loop
    function loop() {
      requestAnimationFrame(loop);
      time += 0.016;

      // Particles
      const pos = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < pos.length; i++) {
        pos[i] += vels[i];
        if (Math.abs(pos[i]) > 12) vels[i] *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y += 0.0006;

      // Drone autonomous movement (figure 8 pattern + waves)
      const targetX = Math.sin(time * 0.4) * 2.5 + Math.sin(time * 0.7) * 1;
      const targetY = Math.cos(time * 0.3) * 1.5 + Math.sin(time * 0.5) * 0.5 + 1.5;
      const targetZ = Math.sin(time * 0.6) * 1 + Math.cos(time * 0.4) * 0.3;
      
      // Smooth movement
      drone.position.x += (targetX - drone.position.x) * 0.02;
      drone.position.y += (targetY - drone.position.y) * 0.02;
      drone.position.z += (targetZ - drone.position.z) * 0.02;
      
      // Tilt based on movement
      const vx = targetX - drone.position.x;
      const vy = targetY - drone.position.y;
      const vz = targetZ - drone.position.z;
      drone.rotation.z = -vx * 0.4;
      drone.rotation.x = -vy * 0.3 + vz * 0.1;
      drone.rotation.y += 0.005;

      // Spin propellers
      propellers.forEach((p, i) => p.rotation.y += (i % 2 ? -0.5 : 0.5));

      // Static camera
      camera.lookAt(0, 1, 0);

      renderer.render(scene, camera);
    }
    
    loop();

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      initialized.current = false;
      clearInterval(ledBlink);
      window.removeEventListener('resize', onResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0" style={{ zIndex: -1 }} />;
}
