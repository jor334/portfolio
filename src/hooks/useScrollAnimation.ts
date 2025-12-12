import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger';

interface ScrollAnimationOptions {
  type?: AnimationType;
  delay?: number;
  duration?: number;
  start?: string;
  staggerAmount?: number;
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
) => {
  const ref = useRef<T>(null);
  const {
    type = 'fadeUp',
    delay = 0,
    duration = 0.8,
    start = 'top 85%',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animation: gsap.core.Tween;

    const baseConfig = {
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
      duration,
      delay,
      ease: 'power3.out',
    };

    switch (type) {
      case 'fadeUp':
        gsap.set(element, { opacity: 0, y: 60 });
        animation = gsap.to(element, {
          ...baseConfig,
          opacity: 1,
          y: 0,
        });
        break;

      case 'fadeIn':
        gsap.set(element, { opacity: 0 });
        animation = gsap.to(element, {
          ...baseConfig,
          opacity: 1,
        });
        break;

      case 'slideLeft':
        gsap.set(element, { opacity: 0, x: 100 });
        animation = gsap.to(element, {
          ...baseConfig,
          opacity: 1,
          x: 0,
        });
        break;

      case 'slideRight':
        gsap.set(element, { opacity: 0, x: -100 });
        animation = gsap.to(element, {
          ...baseConfig,
          opacity: 1,
          x: 0,
        });
        break;

      case 'scale':
        gsap.set(element, { opacity: 0, scale: 0.8 });
        animation = gsap.to(element, {
          ...baseConfig,
          opacity: 1,
          scale: 1,
        });
        break;

      default:
        gsap.set(element, { opacity: 0, y: 60 });
        animation = gsap.to(element, {
          ...baseConfig,
          opacity: 1,
          y: 0,
        });
    }

    return () => {
      animation?.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [type, delay, duration, start]);

  return ref;
};

export const useStaggerAnimation = <T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
) => {
  const ref = useRef<T>(null);
  const {
    delay = 0,
    duration = 0.6,
    start = 'top 85%',
    staggerAmount = 0.15,
  } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.children;
    if (children.length === 0) return;

    gsap.set(children, { opacity: 0, y: 40 });

    const animation = gsap.to(children, {
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger: staggerAmount,
      ease: 'power3.out',
    });

    return () => {
      animation?.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, start, staggerAmount]);

  return ref;
};

export default useScrollAnimation;

