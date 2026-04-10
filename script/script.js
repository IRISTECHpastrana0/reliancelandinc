document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector("input[type='text']")?.value.trim();
      const email = form.querySelector("input[type='email']")?.value.trim();
      const message = form.querySelector("textarea")?.value.trim();

      if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
      }

      alert("Message sent successfully!");
      form.reset();
    });
  }

  const searchInput = document.querySelector("#search");
  const cards = document.querySelectorAll(".card");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const value = this.value.toLowerCase();

      cards.forEach(card => {
        card.style.display =
          card.innerText.toLowerCase().includes(value) ? "block" : "none";
      });
    });
  }

});

function openImage(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  if (!lightbox || !img) return;

  img.src = src;
  lightbox.style.display = "flex";
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeImage();
});