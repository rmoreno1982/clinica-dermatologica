// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

// Form Submissions (Mock)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado. Te contactaremos pronto.');
        form.reset();
    });
});

// Medilink Button
const medilinkBtn = document.getElementById('medilink-btn');
if (medilinkBtn) {
    medilinkBtn.addEventListener('click', function() {
        window.open('https://medilink.cl/clinica-consistorial', '_blank');
    });
}

console.log('Wireframe Clínica Consistorial Dermatología cargado correctamente.');