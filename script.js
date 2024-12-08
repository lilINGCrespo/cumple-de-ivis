let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    // Asegurar que el índice esté dentro del rango
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100; // Mover las imágenes
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Mostrar la primera imagen al cargar
window.onload = () => showSlide(currentSlide);
function showMessage() {
    alert("¡Feliz Cumpleaños, Ivis! 🎉 Que este día esté lleno de amor, alegría y grandes momentos. ¡Te deseo lo mejor hoy y siempre! 💖");
}
