// MENÚ RESPONSIVE
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// TEXTO ANIMADO DE ROLES
const roles = [
  "Desarrollador Front-End Trainee",
  "Docente",
  "Técnico Superior en Turismo",
  "Administrador Hotelero"
];

let indice = 0;
const textoRol = document.getElementById("texto-rol");

function cambiarTexto() {
  if (!textoRol) return;

  indice = (indice + 1) % roles.length;

  // Reiniciar animación
  textoRol.style.animation = "none";
  void textoRol.offsetWidth;
  textoRol.style.animation = "fade 1s ease-in-out";

  textoRol.textContent = roles[indice];
}

setInterval(cambiarTexto, 2500);