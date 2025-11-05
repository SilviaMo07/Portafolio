// ============================================
// SCRIPT DE NAVEGACIÓN Y FORMULARIO
// ============================================

// Esperar a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MENÚ HAMBURGUESA PARA MÓVIL
    // ============================================
    
    // Obtener referencias a los elementos del menú
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Si el botón hamburguesa existe, agregar evento click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Alternar clase 'active' en el menú para mostrarlo/ocultarlo
            navMenu.classList.toggle('active');
            
            // Cambiar apariencia del botón hamburguesa (transformar en X)
            hamburger.classList.toggle('active');
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace (útil en móvil)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remover clase 'active' para cerrar el menú
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // ============================================
    // SCROLL SUAVE AL HACER CLIC EN ENLACES
    // ============================================
    
    // Seleccionar todos los enlaces que apuntan a secciones (#)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Obtener el destino del enlace (ej: #presentacion)
            const href = this.getAttribute('href');
            
            // Solo aplicar scroll suave si el href no está vacío y no es solo '#'
            if (href !== '#' && href.length > 1) {
                e.preventDefault(); // Prevenir comportamiento por defecto
                
                // Obtener el elemento destino
                const targetId = href.substring(1); // Quitar el #
                const targetElement = document.getElementById(targetId);
                
                // Si el elemento existe, hacer scroll suave hacia él
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth', // Animación suave
                        block: 'start' // Alinear al inicio del elemento
                    });
                }
            }
        });
    });
    
    // ============================================
    // MANEJO DEL FORMULARIO DE CONTACTO
    // ============================================
    
    // Obtener referencia al formulario
    const contactoForm = document.getElementById('contacto-form');
    
    // Si el formulario existe, agregar evento de envío
    if (contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            // Prevenir el envío por defecto del formulario
            e.preventDefault();
            
            // Obtener los valores de los campos del formulario
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validar que todos los campos estén llenos
            if (nombre && correo && mensaje) {
                // Mostrar mensaje en la consola del navegador
                console.log('Formulario enviado correctamente');
                
                // Mostrar mensaje de éxito al usuario (opcional)
                alert('¡Mensaje enviado correctamente! Gracias por contactarme.');
                
                // Limpiar el formulario después del envío
                contactoForm.reset();
            } else {
                // Si faltan campos, mostrar mensaje de error
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
    
    // ============================================
    // EFECTO DE NAVEGACIÓN AL HACER SCROLL
    // ============================================
    
    // Obtener referencia a la barra de navegación
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    // Agregar evento de scroll para cambiar apariencia del navbar
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Agregar sombra cuando se hace scroll hacia abajo
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // ANIMACIÓN DE APARICIÓN AL HACER SCROLL
    // ============================================
    
    // Función para verificar si un elemento está visible en la pantalla
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función para animar elementos al aparecer
    function animateOnScroll() {
        // Seleccionar todas las tarjetas de proyectos y experiencias
        const cards = document.querySelectorAll('.proyecto-card, .experiencia-card');
        
        cards.forEach(card => {
            // Si la tarjeta está visible y aún no tiene la clase de animación
            if (isElementInViewport(card) && !card.classList.contains('animated')) {
                card.classList.add('animated');
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                // Aplicar animación después de un pequeño delay
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }
    
    // Ejecutar la animación al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
});


