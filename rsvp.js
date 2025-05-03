document
  .getElementById("plusOneToggle")
  .addEventListener("change", function () {
    const plusOneFields = document.getElementById("plusOneFields");
    plusOneFields.style.display = this.checked ? "block" : "none";
  });

const form = document.getElementById("rsvp-form");
const thankYou = document.getElementById("thank-you");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const plusOneToggle = document.getElementById("plusOneToggle");
  const plusOneInputName = "entry.1802455363";

  if (!plusOneToggle.checked) {
    // Ensure empty string is added when +1 is not checked
    formData.set(plusOneInputName, "");
  }

  fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLSfICZDDls3usu_uMP37MfGgM7rq9Yty7ROEV2u8N6U8ec67mw/formResponse",
    {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }
  )
    .then(() => {
      form.classList.add("hidden");
      thankYou.classList.add("block");
    })
    .catch((err) => {
      alert("There was a problem submitting your RSVP. Please try again.");
      console.error(err);
    });
});
