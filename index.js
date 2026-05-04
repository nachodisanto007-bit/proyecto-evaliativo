// Lógica compartida para todas las pantallas
document.addEventListener('DOMContentLoaded', () => {
    // 1. Resaltar la página actual en el menú
    const path = window.location.pathname.split("/").pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.getAttribute('href') === path) link.classList.add('active');
    });

    // 2. Simulación de carga de datos
    console.log(`Sistema Sport-Tech: Cargando módulo ${path}...`);
});

// Función de filtrado para la galería
function filtrarBusqueda() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let items = document.querySelectorAll('.product-card');
    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}