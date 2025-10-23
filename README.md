# Portafolio de Desarrollador Web

Un portafolio moderno y responsivo creado con HTML, CSS y JavaScript puro para mostrar tus proyectos y habilidades como desarrollador web.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones sutiles
- **Completamente Responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y desktop
- **Navegación Suave**: Scroll suave entre secciones con navegación fija
- **Animaciones Interactivas**: Efectos de entrada y hover para una experiencia engaging
- **Formulario de Contacto**: Validación básica y manejo de envío
- **Iconos de Tecnologías**: Integración con DevIcons para mostrar habilidades técnicas
- **SEO Friendly**: Estructura semántica y meta tags optimizados

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html          # Estructura principal del sitio
├── styles.css          # Estilos CSS modernos y responsivos
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animaciones, Media Queries
- **JavaScript ES6+**: Interactividad y efectos dinámicos
- **Google Fonts**: Tipografía Inter
- **DevIcons**: Iconos de tecnologías

## 🚀 Cómo Usar

### Opción 1: Servidor Local (Recomendado)

1. Instala Node.js desde [nodejs.org](https://nodejs.org/)
2. Instala http-server globalmente:
   ```bash
   npm install -g http-server
   ```
3. Navega al directorio del proyecto:
   ```bash
   cd portafolio
   ```
4. Inicia el servidor:
   ```bash
   http-server -p 8000
   ```
5. Abre tu navegador y ve a `http://localhost:8000`

### Opción 2: Abrir Directamente

Simplemente abre `index.html` en tu navegador web. Sin embargo, algunas funcionalidades pueden no trabajar correctamente sin un servidor local.

## 🎨 Personalización

### Cambiar Información Personal

1. **Nombre y Título**: Edita las líneas 25-27 en `index.html`
2. **Sobre Mí**: Modifica el contenido en la sección "about" (líneas 35-42)
3. **Proyectos**: Actualiza los proyectos en la sección "projects" (líneas 44-89)
4. **Habilidades**: Agrega o quita tecnologías en la sección "skills" (líneas 91-156)
5. **Contacto**: Cambia la información de contacto en la sección "contact" (líneas 158-203)

### Cambiar Colores

Los colores principales están definidos en `:root` en `styles.css`. Modifica estas variables:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    --background-color: #f8f9fa;
}
```

### Agregar Imágenes

1. Crea una carpeta `images/` en el directorio raíz
2. Reemplaza los `placeholder-*.jpg` con tus imágenes reales
3. Asegúrate de que las imágenes estén optimizadas para web

## 📱 Responsive Design

El portafolio está optimizado para:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🌐 Despliegue

### GitHub Pages (Gratis)

1. Sube tu código a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona "main" como branch y "/ (root)" como folder
4. Tu sitio estará disponible en `https://tuusuario.github.io/nombre-repo`

### Netlify (Gratis)

1. Regístrate en [netlify.com](https://netlify.com)
2. Arrastra y suelta la carpeta del proyecto
3. Tu sitio estará listo en segundos

### Vercel (Gratis)

1. Regístrate en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Despliega automáticamente

### Otras Opciones

- **Firebase Hosting**: `firebase deploy`
- **Surge**: `surge .`
- **Heroku**: Para aplicaciones más complejas

## 🔧 Desarrollo

### Agregar Nuevas Secciones

1. Crea una nueva sección en `index.html`:
   ```html
   <section id="nueva-seccion">
       <div class="container">
           <h2>Nueva Sección</h2>
           <!-- Contenido aquí -->
       </div>
   </section>
   ```

2. Agrega estilos en `styles.css`:
   ```css
   #nueva-seccion {
       /* Estilos específicos */
   }
   ```

3. Agrega el enlace en la navegación.

### JavaScript Personalizado

El archivo `script.js` incluye:
- Scroll suave
- Animaciones de entrada
- Validación de formulario
- Menú móvil

Agrega tu código personalizado al final del archivo.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores.

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme a través del formulario del portafolio o por email.

---

¡Feliz coding! 🚀