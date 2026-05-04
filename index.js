document.addEventListener('DOMContentLoaded', () => {
    // 1. Resaltar enlace activo
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.getAttribute('href') === currentPath) link.classList.add('active');
    });

    // 2. Simulación de carga de datos
    console.log(`Página ${currentPath} cargada correctamente.`);
});

// Función para filtrar galería (Usada en galeria.html)
function filterCategory(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}