# 📁 Estructura del Proyecto - Portafolio

## 🏗️ Arquitectura del Proyecto

```
src/
├── sections/          # Secciones principales de la página
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
│
├── components/        # Componentes reutilizables
│   ├── SkillBar.tsx
│   ├── ProjectCard.tsx
│   ├── ContactInfo.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
│
├── assets/           # Recursos estáticos
│   └── react.svg
│
├── App.tsx           # Componente principal
├── App.css           # Estilos mínimos
├── main.tsx          # Punto de entrada
└── index.css         # Configuración de Tailwind CSS
```

---

## 📂 Descripción de Carpetas

### `/sections` - Secciones de la Página
Contiene las **secciones principales** del portafolio. Cada sección representa una parte completa de la página:

- **HeroSection**: Sección de bienvenida/hero con CTA
- **AboutSection**: Información personal y habilidades
- **ProjectsSection**: Grid de proyectos destacados
- **ContactSection**: Formulario de contacto e información

### `/components` - Componentes Reutilizables
Componentes más pequeños y reutilizables que son usados por las secciones:

- **SkillBar**: Barra de progreso para habilidades
- **ProjectCard**: Tarjeta individual de proyecto
- **ContactInfo**: Información de contacto y redes sociales
- **ContactForm**: Formulario de contacto
- **Footer**: Pie de página con copyright

---

## 🔄 Flujo de Componentes

```
App.tsx
  ├── HeroSection
  ├── AboutSection
  │     └── SkillBar (×6)
  ├── ProjectsSection
  │     └── ProjectCard (×4)
  └── ContactSection
        ├── ContactInfo
        ├── ContactForm
        └── Footer
```

---

## 🎨 Sistema de Estilos - Tailwind CSS

### ✨ Ventajas de Usar Tailwind

- **Sin archivos CSS separados**: Todo el estilo está en los componentes
- **Utility-first**: Clases utilitarias directamente en JSX
- **Responsive**: Breakpoints integrados (sm:, md:, lg:, xl:)
- **Dark mode**: Soporte nativo con `dark:` prefix
- **Consistencia**: Sistema de diseño coherente
- **Performance**: CSS optimizado automáticamente

### 🎨 Paleta de Colores

```css
Primarios:
- Purple: from-purple-600 to-purple-800 (gradientes)
- Grays: gray-50 → gray-950 (fondos y textos)

Modo Oscuro:
- Automático con dark: prefix
- Respeta preferencias del sistema
```

### 📱 Breakpoints Responsive

```
sm:  640px  - Móviles grandes
md:  768px  - Tablets
lg:  1024px - Laptops
xl:  1280px - Desktops
```

### 🎭 Animaciones y Transiciones

Todas las interacciones usan:
- `transition-all duration-300` - Transiciones suaves
- `hover:-translate-y-*` - Efectos de elevación
- `hover:scale-*` - Efectos de escala
- `hover:shadow-*` - Sombras dinámicas

---

## 🧩 Principios de Organización

### ✅ Separación de Responsabilidades
- **Secciones**: Componentes de alto nivel que representan partes completas de la página
- **Componentes**: Piezas reutilizables y modulares

### ✅ Reutilización
- Los componentes pequeños (`SkillBar`, `ProjectCard`) pueden ser reutilizados
- Las secciones son específicas pero mantienen lógica separada

### ✅ Escalabilidad
- Fácil agregar nuevas secciones
- Fácil agregar nuevos componentes
- Estructura clara y predecible

### ✅ Type Safety
- TypeScript en todos los componentes
- Interfaces para props
- Autocompletado y validación

---

## 🚀 Cómo Agregar Nuevas Funcionalidades

### Agregar una nueva sección:
1. Crear archivo en `/sections/NuevaSeccion.tsx`
2. Usar clases de Tailwind para estilos
3. Importar y agregar en `App.tsx`

```tsx
// Ejemplo: sections/NuevaSeccion.tsx
const NuevaSeccion = () => {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nueva Sección
        </h2>
        {/* Contenido */}
      </div>
    </section>
  );
};

export default NuevaSeccion;
```

### Agregar un nuevo componente:
1. Crear archivo en `/components/NuevoComponente.tsx`
2. Usar Tailwind para estilos
3. Definir interfaces TypeScript para props
4. Importar en la sección que lo necesite

```tsx
// Ejemplo: components/NuevoComponente.tsx
interface NuevoComponenteProps {
  title: string;
  description: string;
}

const NuevoComponente = ({ title, description }: NuevoComponenteProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default NuevoComponente;
```

---

## 🛠️ Stack Tecnológico

- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Framework CSS utility-first
- **Vite** - Build tool y dev server
- **ESLint** - Linter de código

---

## 📝 Convenciones de Código

### Componentes
- PascalCase para nombres de componentes
- Un componente por archivo
- Export default al final

### Estilos
- Clases de Tailwind en orden lógico:
  1. Layout (flex, grid, etc.)
  2. Spacing (p-, m-, gap-)
  3. Sizing (w-, h-)
  4. Typography (text-, font-)
  5. Colors (bg-, text-)
  6. Effects (shadow-, rounded-)
  7. Transitions (transition-, hover:)

### TypeScript
- Interfaces con sufijo Props
- Props destructuradas en parámetros
- Tipos explícitos cuando sea necesario

---

## 🎯 Mejores Prácticas Implementadas

✅ **Responsive Design**: Mobile-first con breakpoints de Tailwind  
✅ **Dark Mode**: Soporte automático del sistema  
✅ **Accesibilidad**: Etiquetas semánticas y ARIA cuando es necesario  
✅ **Performance**: CSS optimizado, componentes ligeros  
✅ **SEO Ready**: Estructura semántica HTML5  
✅ **Type Safety**: TypeScript en todo el proyecto  
✅ **Code Splitting**: Componentes modulares  
✅ **Maintainability**: Código limpio y bien organizado  

---

## 📦 Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter de código
```

---

## 🎨 Personalización Rápida

### Cambiar colores principales:
Busca y reemplaza en todos los archivos:
- `purple-600` → tu color primario
- `purple-800` → tu color primario oscuro

### Ajustar espaciado:
- `py-24` → padding vertical de secciones
- `px-8` → padding horizontal
- `gap-*` → espaciado entre elementos

### Modificar tipografía:
En `index.css`, cambia:
```css
font-family: 'TuFuente', system-ui, ...
```

---

## 📚 Recursos Útiles

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Vite Guide](https://vitejs.dev/guide/)
