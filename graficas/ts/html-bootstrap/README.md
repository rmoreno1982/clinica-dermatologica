# Clínica Consistorial - Sitio Web HTML + Bootstrap 5

## Descripción

Sitio web completamente responsivo de la Clínica Consistorial Dermatología, creado con **HTML puro** y **Bootstrap 5**. Mantiene el mismo diseño elegante y profesional que la versión React/Tailwind CSS.

## Estructura de Archivos

```
html-bootstrap/
├── index.html           # Página de inicio
├── servicios.html       # Página de servicios
├── equipo.html          # Página del equipo médico
├── clinica.html         # Página acerca de la clínica
├── contacto.html        # Página de contacto
└── assets/
    ├── css/
    │   └── style.css    # Estilos personalizados
    └── js/
        └── main.js      # JavaScript funcional
```

## Características

✅ **Diseño Responsivo** - Se adapta perfectamente a dispositivos móviles, tablets y desktops
✅ **Bootstrap 5** - Framework CSS moderno y versátil
✅ **Paleta de Colores Premium** - Oro (#C4A252), Crema (#FAFAF6), Carbón (#1A1816)
✅ **Tipografías Elegantes** - Playfair Display y Raleway
✅ **Navegación Fluida** - Menú fijo con scroll suave
✅ **Secciones Completas**:
   - Hero Section
   - Servicios
   - Equipo Médico
   - Información de la Clínica
   - Formulario de Contacto
   - Footer

## Cómo Usar

### Opción 1: Abrir directamente en el navegador
1. Navega a la carpeta `html-bootstrap/`
2. Haz doble clic en `index.html` o abre el archivo con tu navegador preferido
3. Navega usando los enlaces del menú

### Opción 2: Con un servidor local (recomendado)

#### Con Python 3:
```bash
cd html-bootstrap
python -m http.server 8000
```
Luego abre: `http://localhost:8000`

#### Con Node.js (http-server):
```bash
cd html-bootstrap
npm install -g http-server
http-server
```

#### Con Live Server (VS Code):
1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

## Personalización

### Cambiar Colores
Edita `/assets/css/style.css` en la sección de variables CSS:
```css
:root {
  --color-gold: #C4A252;
  --color-gold-light: #D4BA78;
  --color-cream: #FAFAF6;
  /* ... */
}
```

### Cambiar Contenido
- **Textos**: Edita directamente el HTML en cada archivo
- **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes
- **Información de contacto**: Actualiza en `contacto.html` y el footer de todas las páginas

### Agregar Nuevas Páginas
1. Copia cualquier archivo HTML existente
2. Modifica el contenido
3. Añade el enlace en el navbar de todas las páginas

## Dependencias

- **Bootstrap 5.3.0** - CDN (sin instalación necesaria)
- HTML5
- CSS3
- JavaScript vanilla

## Navegadores Soportados

- Chrome/Chromium (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Información de Contacto

- **Dirección**: Av. Consistorial 5791, Oficina 84, Peñalolén, Santiago
- **Teléfono**: +56 9 XXXX XXXX (editable)
- **Email**: contacto@clinicaconsistorial.com (editable)
- **Horarios**: Lunes a Viernes 09:00-18:00, Sábado 09:00-12:00

## Mantenimiento y Actualizaciones

Para mantener el sitio actualizado:
1. Actualiza los horarios de atención si cambian
2. Mantén la información de contacto vigente
3. Agrega nuevos servicios según sea necesario
4. Actualiza las imágenes del equipo médico periódicamente

## Notas Técnicas

- El formulario de contacto requiere backend para procesar envíos (actualmente es solo HTML)
- Las imágenes se cargan desde Unsplash (requiere conexión a internet)
- El mapa en contacto.html es un placeholder y debe reemplazarse con un mapa real (Google Maps, OpenStreetMap, etc.)

## Licencia

© 2024 Clínica Consistorial Dermatología. Todos los derechos reservados.
