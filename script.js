let index = 0;
const cards = document.getElementById("cards");
const total = document.querySelectorAll(".card").length;

function showSlide(i) {
    index = (i + total) % total;
    cards.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

/* Carrusel automático */
setInterval(() => {
    nextSlide();
}, 4000);