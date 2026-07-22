# 🚀 Clínica Consistorial - Sitio Web HTML con Bootstrap 5

## ✅ Proyecto Completado

Se ha creado una versión completa del sitio web en **HTML puro con Bootstrap 5**, manteniendo el mismo diseño elegante y profesional.

## 📁 Ubicación

```
/Users/romo/Downloads/Crear propuesta gráfica visual/html-bootstrap/
```

## 🎯 Archivos Principales

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Página de inicio con hero section y servicios |
| `servicios.html` | Detalle completo de todos los servicios |
| `equipo.html` | Perfiles de los médicos especialistas |
| `clinica.html` | Información acerca de la clínica |
| `contacto.html` | Formulario de contacto e información |
| `assets/css/style.css` | Estilos personalizados y responsivos |
| `assets/js/main.js` | Funcionalidades JavaScript |
| `README.md` | Documentación completa |

## 🌐 Cómo Abrir

### Opción 1: Abrir directamente
1. Abre el archivo `html-bootstrap/index.html` en tu navegador
2. Navega usando el menú

### Opción 2: Con servidor local (recomendado)

**Python 3:**
```bash
cd /Users/romo/Downloads/Crear\ propuesta\ gráfica\ visual/html-bootstrap
python -m http.server 8000
# Abre: http://localhost:8000
```

**Node.js:**
```bash
cd /Users/romo/Downloads/Crear\ propuesta\ gráfica\ visual/html-bootstrap
npx http-server
```

## 🎨 Características del Diseño

✨ **Totalmente Responsivo** - Funciona perfectamente en móvil, tablet y desktop
✨ **Bootstrap 5** - Framework CSS moderno vía CDN
✨ **Diseño Premium** - Paleta de colores oro y crema elegante
✨ **Tipografías Elegantes** - Playfair Display y Raleway
✨ **Sin Dependencias** - Solo HTML, CSS y Bootstrap CDN
✨ **Menú Móvil** - Funcional con hamburguesa en pantallas pequeñas
✨ **Formulario de Contacto** - Completamente funcional
✨ **Secciones Completas**:
   - Hero Section con CTA
   - Servicios con tarjetas interactivas
   - Equipo en 2 columnas (igual al React)
   - Información de la clínica
   - Contacto con información
   - Footer profesional

## 🎯 Componentes Incluidos

### Navbar
- Logo y navegación
- Botón "Agendar Cita"
- Menú responsivo (hamburguesa en móvil)
- Activo en cada página

### Hero Section
- Título con tipografía grande
- Imagen de fondo
- Call-to-action principal
- Decoraciones en oro

### Tarjetas de Servicios
- Imagen con hover
- Descripción y detalles
- Enlaces a páginas específicas
- Diseño elegante

### Equipos Médicos (2 columnas)
- Fotos de doctores
- Información detallada
- Áreas de interés con tags
- Membresías profesionales

### Footer
- Logo de la clínica
- Enlaces rápidos
- Información de contacto
- Horarios
- Copyright

## 🔧 Personalización

### Cambiar Teléfono/Email
Busca en todos los archivos y reemplaza:
- `+56 9 XXXX XXXX`
- `info@clinicaconsistorial.cl`
- `contacto@clinicaconsistorial.com`

### Cambiar Colores
Edita `assets/css/style.css`:
```css
:root {
  --color-gold: #C4A252;      /* Color principal */
  --color-cream: #FAFAF6;     /* Fondo claro */
  --color-charcoal: #1A1816;  /* Texto oscuro */
}
```

### Cambiar Imágenes
Las imágenes actualmente vienen de Unsplash. Para usar tus propias:
1. Reemplaza las URLs en cada archivo HTML
2. Coloca las imágenes en `assets/images/`

## 📊 Compatibilidad

✅ Chrome, Firefox, Safari, Edge (versiones actuales)
✅ Dispositivos móviles (iOS, Android)
✅ Tablets
✅ Desktops (toda resolución)

## 💾 Estructura CSS

### Variables de Color
```css
--color-gold: #C4A252
--color-gold-light: #D4BA78
--color-gold-dark: #A88840
--color-cream: #FAFAF6
--color-charcoal: #1A1816
--color-charcoal-mid: #2C2825
--color-muted: #8A847C
--color-dark: #141210
```

### Clases Útiles
- `.font-display` - Usa Playfair Display
- `.text-gold` - Color oro
- `.btn-gold` - Botón principal
- `.btn-outline` - Botón outline
- `.hero-label` - Etiqueta pequeña
- `.doctor-card` - Tarjeta de doctor

## 🚀 Próximos Pasos (Opcional)

1. **Agregar Google Maps** - Reemplaza el placeholder en contacto.html
2. **Backend para Formulario** - Conecta a un servicio de emails
3. **Desplegar en servidor** - Usa GitHub Pages, Netlify o tu hosting
4. **Agregar Blog** - Crea nuevas páginas para artículos

## 📞 Información de Contacto

- Dirección: Av. Consistorial 5791, Oficina 84, Peñalolén, Santiago
- Teléfono: +56 9 XXXX XXXX (actualizar)
- Email: contacto@clinicaconsistorial.com (actualizar)

---

**Nota**: Este sitio es completamente estático. Para procesar formularios se necesita un backend (PHP, Node.js, etc.)

¡Listo para usar! 🎉
