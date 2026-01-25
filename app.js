const triggers = document.querySelectorAll(".lightbox-trigger");
const btn = document.querySelectorAll(".btnReadMore");
triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const images = trigger.dataset.images.split(",");
    let currentIndex = 0;

    // Crear lightbox
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    lightbox.innerHTML = `
      <button class="close">&times;</button>
      <button class="prev">&#10094;</button>
      <img src="${images[currentIndex]}" alt="">
      <button class="next">&#10095;</button>
    `;

    document.body.appendChild(lightbox);

    const img = lightbox.querySelector("img");
    const next = lightbox.querySelector(".next");
    const prev = lightbox.querySelector(".prev");
    const close = lightbox.querySelector(".close");

    // Funciones
    next.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
    });

    prev.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      img.src = images[currentIndex];
    });

    close.addEventListener("click", () => {
      lightbox.remove();
    });

    // Cerrar al hacer click fuera
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.remove();
      }
    });
  });
});

/* para que se oculte el menu */
$("#iconomenu").click(function () {
  $("#contenedor_menu").toggleClass("abrir_menu");
});
$(".cierra").click(function () {
  $("#contenedor_menu").toggleClass("abrir_menu");
});
