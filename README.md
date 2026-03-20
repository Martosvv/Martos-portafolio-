# Portfolio - Martos

Portfolio profesional de desarrollador web full stack, construido con las últimas tecnologías web.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI moderna
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS v4** - Framework de CSS utility-first
- **PostCSS** - Procesador de CSS

## ✨ Características

- 🎨 Diseño moderno con tema oscuro y gradientes
- 📱 Totalmente responsive para todos los dispositivos
- ⚡ Animaciones suaves y transiciones
- 🎯 Navegación fluida con scroll suave
- 💼 Secciones de proyectos, habilidades y contacto
- 📝 Formulario de contacto funcional
- 🎭 Efectos de hover interactivos

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Martosvv/Martos-portafolio-.git
cd Martos-portafolio-
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Scripts

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter de código

## 🎯 Estructura del Proyecto

```
src/
├── components/       # Componentes React
│   ├── Navbar.tsx   # Barra de navegación
│   ├── Hero.tsx     # Sección principal
│   ├── About.tsx    # Sobre mí
│   ├── Projects.tsx # Proyectos
│   ├── Skills.tsx   # Habilidades
│   ├── Contact.tsx  # Formulario de contacto
│   └── Footer.tsx   # Pie de página
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada
└── index.css        # Estilos globales
```

## 🚀 Despliegue

El proyecto puede ser desplegado en diversas plataformas:

### Vercel (Recomendado)
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones en pantalla

### Netlify
1. Conecta tu repositorio en [Netlify](https://netlify.com)
2. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. ¡Despliega!

### GitHub Pages
1. Instala: `npm install --save-dev gh-pages`
2. Agrega a `package.json`:
   ```json
   "homepage": "https://tuusuario.github.io/Martos-portafolio-",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta: `npm run deploy`

## 🎨 Personalización

Para personalizar el portfolio:

1. **Información personal**: Edita los componentes en `src/components/`
2. **Colores y tema**: Modifica `src/index.css` (variables de Tailwind)
3. **Proyectos**: Actualiza el array de proyectos en `src/components/Projects.tsx`
4. **Habilidades**: Modifica las skills en `src/components/Skills.tsx`
5. **Información de contacto**: Actualiza `src/components/Contact.tsx` y `Footer.tsx`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Martos**
- GitHub: [@Martosvv](https://github.com/Martosvv)

---

⭐ Si te gusta este proyecto, ¡considera darle una estrella!
