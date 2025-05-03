function switchFullBackgrounds() {
  const horizontalImage = document.getElementById("horizontal-bg");
  const verticalImage = document.getElementById("vertical-bg");
  if (window.matchMedia("(orientation: portrait)").matches) {
    horizontalImage.classList.add("block");
    verticalImage.classList.add("hidden");
  } else {
    horizontalImage.classList.add("hidden");
    verticalImage.classList.add("block");
  }
}

function weddingDetailsOrientation() {
  const weddingDetails = document.getElementById("detalji-vencanja");
  if (window.matchMedia("(orientation: portrait)").matches) {
    weddingDetails.classList.remove("flex-row");
    weddingDetails.classList.add("flex-column");
  } else {
    weddingDetails.classList.remove("flex-column");
    weddingDetails.classList.add("flex-row");
  }
}

function checkOrientation() {
  // switchFullBackgrounds();
  weddingDetailsOrientation();
}

window.addEventListener("DOMContentLoaded", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation);

$("a.nav-link").click(function () {
  const dropdown = document.getElementById("navbarNav");
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
});
