document
  .getElementById("plusOneToggle")
  .addEventListener("change", function () {
    const plusOneFields = document.getElementById("plusOneFields");
    plusOneFields.style.display = this.checked ? "block" : "none";
  });

document.getElementById("kidsToggle").addEventListener("change", function () {
  const kidsNumberDiv = document.getElementById("kidsNumber");

  const show = this.checked;
  kidsNumberDiv.style.display = show ? "block" : "none";
  document.getElementById("kidsNumberInput").value = "0";
  const kidsLabel = document.getElementById("kidsLabel");
  kidsLabel.style.display = "none";

  // Hide all kid fields by default
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`kid${i}`).style.display = "none";
    if (!show) document.getElementById(`kid${i}Input`).value = "";
  }
});

document
  .getElementById("kidsNumberInput")
  .addEventListener("focus", function () {
    this.select();
    setTimeout(() => this.select(), 0);
  });

document
  .querySelector('input[name="entry.2142379312"]') // Number of kids
  .addEventListener("input", function () {
    const numKids = Math.min(3, parseInt(this.value) || 0);
    const kidsLabel = document.getElementById("kidsLabel");
    kidsLabel.style.display = numKids > 0 ? "block" : "none";
    for (let i = 1; i <= 3; i++) {
      const kid = document.getElementById(`kid${i}`);
      kid.style.display = i <= numKids ? "block" : "none";
      if (i > numKids) document.getElementById(`kid${i}Input`).value = "";
    }
  });

const form = document.getElementById("rsvp-form");
const thankYou = document.getElementById("thank-you");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const plusOneToggle = document.getElementById("plusOneToggle");
  const plusOneInputName = "entry.246061222";

  if (!plusOneToggle.checked) {
    // Ensure empty string is added when +1 is not checked
    formData.set(plusOneInputName, "");
  }

  if (!document.getElementById("kidsToggle").checked) {
    formData.set("entry.2142379312", "0");
    formData.set("entry.1800873322", "");
    formData.set("entry.867450465", "");
    formData.set("entry.1055618791", "");
  } else {
    const numKids = Math.min(
      3,
      parseInt(document.getElementById("kidsNumberInput").value) || 0
    );
    switch (numKids) {
      case 1:
        formData.set("entry.867450465", "");
        formData.set("entry.1055618791", "");
        break;
      case 2:
        formData.set("entry.1055618791", "");
        break;
      case 3:
        break;
      default:
        formData.set("entry.1800873322", "");
        formData.set("entry.867450465", "");
        formData.set("entry.1055618791", "");
        break;
    }
  }

  fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLSc_YV21SuwzewvSu8ofkewmCXK6fL23N_LyLNrPZoIdzD8JMg/formResponse",
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
