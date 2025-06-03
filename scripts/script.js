const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    //Cambiar el texto del botón
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Cambiar a modo claro';
    } else {
        toggleButton.textContent = 'Cambiar a modo oscuro';
    }
});