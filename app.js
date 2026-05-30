/* para las animaciones con wow */
new WOW().init();
/* para que se oculte el menu */
$("#iconomenu").click(function () {
  $("#contenedor_menu").toggleClass("abrir_menu");
});
$(".cierra").click(function () {
  $("#contenedor_menu").toggleClass("abrir_menu");
});
window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("success") === "true") {
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarme.",
        confirmButtonText: "Aceptar"
      });

      // Limpia la URL para quitar ?success=true
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  });
const items = document.querySelectorAll(".galeria-item");
const modal = document.getElementById("modal");
const imgGrande = document.getElementById("imgGrande");
const textoModal = document.getElementById("textoModal");
const cerrar = document.querySelector(".cerrar");

items.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const titulo = item.querySelector("h3").textContent;
    const desc = item.querySelector("p").textContent;

    imgGrande.src = img.src;
    textoModal.innerHTML = `<h3>${titulo}</h3><p>${desc}</p>`;
    modal.style.display = "block";
  });
});

cerrar.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

