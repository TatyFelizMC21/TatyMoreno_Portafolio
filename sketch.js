document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  // Tiempo de carga
  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.classList.remove("hidden");

    // Activa el efecto del cursor
    activateCursorEffect();
  }, 3000);
});

// Función para el efecto del cursor interactivo
function activateCursorEffect() {
  document.addEventListener("mousemove", (e) => {
    // Crear una burbuja
    const bubble = document.createElement("div");
    bubble.className = "cursor-bubble";

    // Posicionar la burbuja en la posición del cursor
    bubble.style.left = `${e.pageX}px`;
    bubble.style.top = `${e.pageY}px`;

    document.body.appendChild(bubble);

    // Eliminar la burbuja después de un segundo (cuando la animación termina)
    setTimeout(() => {
      bubble.remove();
    }, 1000);
  });
}
