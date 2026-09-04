# 💎 Portafolio — Juan Camilo Leal

> **"If there's a will, there's a way"**

Portafolio profesional one-page desarrollado con una **arquitectura moderna y modular basada en componentes** (ES Modules nativos, HTML5 y CSS3 puro). Diseñado con enfoque en rendimiento, accesibilidad (WCAG AA+), separación de responsabilidades y experiencia de usuario.

---

## 🌐 Demo en Vivo

🔗 **[Ver Portafolio en GitHub Pages](https://jlebot7.github.io/PortFolio/)**

![Portfolio Status](https://img.shields.io/badge/Estado-En%20Línea-brightgreen?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Arquitectura-Componentes%20Modulares%20(ESM)-06b6d4?style=for-the-badge)

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Rol en el Proyecto |
|---|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Estructura semántica ultraligera y puntos de montaje |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Estilos responsivos (mobile-first), variables CSS y animaciones |
| ![JavaScript](https://img.shields.io/badge/JavaScript%20ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Arquitectura de componentes, capa de datos y orquestador |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Control de versiones con Git Flow y Conventional Commits |
| ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white) | Despliegue estático continuo |

---

## 🧩 Arquitectura Modular por Componentes

El proyecto sigue una estricta **Separación de Responsabilidades (Separation of Concerns)**:

```
PortFolio/
├── index.html                  # Contenedor semántico principal (< 45 líneas)
├── package.json                # Configuración de ES Modules ("type": "module")
├── css/
│   └── styles.css              # Sistema de diseño, variables y media queries
├── js/
│   ├── app.js                  # Orquestador central (Bootstrap & Ciclo de vida)
│   ├── data/                   # Capa de datos desacoplada (Data Layer)
│   │   ├── profile.data.js     # Datos biográficos, estadísticas y enlaces
│   │   ├── skills.data.js      # Competencias técnicas categorizadas
│   │   └── projects.data.js    # Repositorios destacados de GitHub
│   ├── components/             # Componentes de UI reutilizables
│   │   ├── Navbar.js           # Barra de navegación fija y menú hamburguesa
│   │   ├── Hero.js             # Sección principal, CTAs y typing container
│   │   ├── About.js            # Presentación, avatar y tarjetas de métricas
│   │   ├── Skills.js           # Grid dinámico de tecnologías por categoría
│   │   ├── Projects.js         # Tarjetas de proyectos con tags y GitHub links
│   │   ├── Contact.js          # Formulario de contacto interactivo
│   │   └── Footer.js           # Pie de página y copyright dinámico
│   └── modules/                # Módulos de comportamiento independientes
│       ├── typing.js           # Efecto de máquina de escribir reutilizable
│       ├── scroll.js           # Smooth scroll, sticky navbar y link activo
│       └── reveal.js           # IntersectionObserver para animaciones al scroll
├── .gitignore                  # Reglas de exclusión de Git
└── README.md                   # Documentación técnica
```

### 🎯 Beneficios de esta Arquitectura

1. **Mantenibilidad Extrema**: Para agregar un nuevo proyecto o tecnología, solo se añade un objeto en `js/data/projects.data.js` o `js/data/skills.data.js` sin tocar HTML ni duplicar maquetación.
2. **`index.html` Limpio y Declarativo**: Actúa como host semántico montando `<header>`, `<main>` y `<footer>`.
3. **Cero Dependencias Pesadas**: No requiere frameworks ni bundlers para funcionar; ejecuta de forma nativa en cualquier servidor web moderno o GitHub Pages.
4. **Escalabilidad**: Cada componente encapsula su propia plantilla y lógica de eventos.

---

## ✨ Características Principales

- 📱 **100% Responsivo (Mobile-First)**: Adaptado a móviles (320px, 480px), tablets (768px) y escritorios (1024px, 1200px+).
- 🎨 **Tema Oscuro Profesional**: Contraste WCAG AA+ (~17:1) con fondo oscuro profundo y acentos cian/azul.
- ⚡ **Rendimiento Ultrarrápido**: Sin bibliotecas externas pesadas; SVGs vectoriales y lazy loading en imágenes.
- ♿ **Accesible**: Semántica HTML5 nativa (`header`, `main`, `section`, `article`, `footer`) y atributos `aria-label`.
- 🎭 **Microinteracciones**: Efecto de máquina de escribir dinámico, scroll reveal fluido e indicador de scroll flotante.
- 🧭 **Navegación Fluida**: Menú responsive con bloqueo de scroll de fondo y auto-cierre al seleccionar destino.

---

## 🛠️ Instalación y Ejecución Local

Debido al uso de **ES Modules nativos (`import`/`export`)**, los navegadores requieren servir los archivos mediante el protocolo HTTP(S) para respetar las políticas de seguridad:

### Opción 1: Con Python (Recomendado, sin instalaciones adicionales)
```bash
# Dentro de la carpeta PortFolio:
python -m http.server 3000
```
Luego abre tu navegador en `http://localhost:3000`.

### Opción 2: Con VS Code
Instala la extensión **Live Server**, haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.

### Opción 3: Con npm / npx
```bash
npx serve .
```

---

## 🚀 Despliegue en GitHub Pages

El proyecto está 100% listo para desplegarse en GitHub Pages sin pasos de compilación:

1. Agrega el repositorio remoto y haz push a la rama `main`:
   ```bash
   git remote add origin https://github.com/Jlebot7/PortFolio.git
   git branch -M main
   git push -u origin main
   ```
2. En GitHub, dirígete a **Settings → Pages**.
3. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
4. Elige la rama **`main`** y la carpeta **`/(root)`**. Guarda los cambios.
5. Tu portafolio estará disponible en: `https://jlebot7.github.io/PortFolio/`

---

## 🤝 Contacto

- **GitHub**: [@Jlebot7](https://github.com/Jlebot7)
- **Email**: jlebot7@gmail.com

---

Hecho con ❤️ por **Juan Camilo Leal** © 2026
