function checkOrientation() {
  const horizontalImage = document.getElementById("horizontal-bg");
  const verticalImage = document.getElementById("vertical-bg");

  if (window.matchMedia("(orientation: portrait)").matches) {
    horizontalImage.style.display = "block";
    verticalImage.style.display = "none";
  } else {
    horizontalImage.style.display = "none";
    verticalImage.style.display = "block";
  }

  const weddingDetails = document.getElementById("detalji-vencanja");
  if (window.matchMedia("(orientation: portrait)").matches) {
    weddingDetails.classList.remove("flex-row");
    weddingDetails.classList.add("flex-column");
  } else {
    weddingDetails.classList.remove("flex-column");
    weddingDetails.classList.add("flex-row");
  }
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
