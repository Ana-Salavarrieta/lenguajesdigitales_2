// Loop para mostrar cada imagen con intervalo de 300ms usando display y opacity
window.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen');
    let index = 0;
    // Oculta todas las imágenes y las hace transparentes
    function ocultarTodas() {
        imagenes.forEach(div => {
            div.style.display = 'none';
            const img = div.querySelector('img');
            if (img) img.style.opacity = '0';
        });
    }
    function mostrarImagen(i) {
        ocultarTodas();
        const div = imagenes[i];
        if (div) {
            div.style.display = 'block';
            const img = div.querySelector('img');
            if (img) img.style.opacity = '1';
        }
    }
    function loop() {
        mostrarImagen(index);
        index = (index + 1) % imagenes.length;
        setTimeout(loop, 300);
    }
    loop();
});
