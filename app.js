// Configuración central de navegación para LUMERS
const LumersApp = {
    // 1. Lógica de Navegación
    init: function() {
        console.log("Lumers App Iniciada...");
        this.bindEvents();
    },

    bindEvents: function() {
        // Escuchar clics en botones de "Crear Envío"
        document.querySelectorAll('a[href="crear-envio.html"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log("Navegando a Formulario de Envío...");
            });
        });

        // Simulación de protección de rutas (Si no está logueado, va al index)
        const user = localStorage.getItem('lumers_user');
        const privatePages = ['perfil.html', 'crear-envio.html', 'Chat.html'];
        
        if (!user && privatePages.includes(window.location.pathname.split('/').pop())) {
            alert("Por favor, inicia sesión para acceder.");
            window.location.href = "index.html";
        }
    },

    // 2. Lógica para la Subasta (Puja rápida)
    enviarPuja: function(envioId, monto) {
        if(monto <= 0) return alert("Ingresa un monto válido");
        console.log(`Registrando puja de $${monto} para el envío ${envioId}`);
        // Aquí conectaremos con la función de Firebase que hicimos antes
        alert("¡Tu oferta ha sido enviada al remitente!");
    }
};

document.addEventListener('DOMContentLoaded', () => LumersApp.init());
