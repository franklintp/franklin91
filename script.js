const boton = document.getElementById("boton-cambia");
const pantallaInicial = document.getElementById("pantalla-inicial");
const contenidoPrincipal = document.getElementById("contenido-principal");
const musica = document.getElementById("musica");
const contenedorPalabras = document.getElementById("palabras-flotantes");
const contenedorCorazones = document.getElementById("corazones");
const letraDiv = document.getElementById("letra-cancion");

const mensajes = [
  { texto: "Hola mi amor", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  { texto: "buen intento", top: "20%", left: "70%", transform: "translate(-50%, -50%)" },
  { texto: "hoy no Lis", top: "70%", left: "30%", transform: "translate(-50%, -50%)" },
  { texto: "esta bien", top: "30%", left: "80%", transform: "translate(-50%, -50%)" },
  { texto: "presioname", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
];

let indice = 0;

// Letra adaptada con último diálogo fijo
const letraCancion = [
  { tiempo: 32, texto: "Bajo las luces de la ciudad 🌃" },
  { tiempo: 35.99, texto: "Solo pienso en ti, mi amor 💕" },
  { tiempo: 40, texto: "La noche brilla cuando estás junto a mí ✨" },
  { tiempo: 43, texto: "Cada recuerdo me lleva a ti 💭" },
  { tiempo: 46, texto: "Mi corazón late solo por ti ❤️" },
  { tiempo: 50, texto: "Tu amor es mi refugio 💖" },
  { tiempo: 55, texto: "No existe nadie más para mí 💞" },
  { tiempo: 58, texto: "Quédate a mi lado esta noche ✨" },
  { tiempo: 59, texto: "Mi amor eterno es solo para ti 💌" },
  { tiempo: 64, texto: "Cada momento contigo es un tesoro 💎" },
  { tiempo: 68, texto: "Siento tu risa iluminar mi mundo 😍" },
  { tiempo: 72, texto: "Tus abrazos son mi hogar 🏡" },
  { tiempo: 76, texto: "Entre tus brazos olvido todo 💖" },
  { tiempo: 78, texto: "Prometo amarte siempre 💞" },
  { tiempo: 82, texto: "Eres mi felicidad infinita 🌈" },
  { tiempo: 84, texto: "Sin ti mi mundo estaría vacío 🌌" },
  { tiempo: 87, texto: "Te llevo en mi corazón 💓" },
  { tiempo: 90, texto: "Cada latido susurra tu nombre 💘" },
  { tiempo: 92, texto: "Lisbeth 💖" } // Este queda fijo
];

function actualizarBoton() {
  const m = mensajes[indice];
  boton.textContent = m.texto;
  boton.style.top = m.top;
  boton.style.left = m.left;
  boton.style.transform = m.transform;
}

function crearPalabra() {
  const palabra = document.createElement("div");
  palabra.classList.add("palabra");
  palabra.textContent = "Feliz día de la novia ❤️";
  palabra.style.top = Math.random() * 90 + "%";
  palabra.style.left = Math.random() * 90 + "%";
  contenedorPalabras.appendChild(palabra);
  setTimeout(() => palabra.remove(), 4000);
}

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.textContent = "❤";
  corazon.style.left = Math.random() * 90 + "%";
  corazon.style.bottom = "0px";
  corazon.style.fontSize = (Math.random() * 1.5 + 1) + "em";
  contenedorCorazones.appendChild(corazon);
  setTimeout(() => corazon.remove(), 5000);
}

// Mostrar letra sincronizada con animación
function mostrarLetraSincronizada() {
  let indiceLetra = 0;
  const check = setInterval(() => {
    const tiempo = musica.currentTime;
    if (indiceLetra < letraCancion.length && tiempo >= letraCancion[indiceLetra].tiempo) {
      letraDiv.textContent = "";
      const linea = document.createElement("div");

      // Si es el último diálogo, se queda fijo
      if (indiceLetra === letraCancion.length - 1) {
        linea.textContent = "Lisbeth 💖";
        linea.style.fontSize = "2.5em";
        linea.style.fontFamily = "'Great Vibes', cursive";
        linea.style.color = "#d12c6a";
        linea.style.textShadow = "0 0 15px rgba(255,105,180,0.8)";
      } else {
        linea.classList.add("linea-activa");
        linea.textContent = letraCancion[indiceLetra].texto;
      }

      letraDiv.appendChild(linea);
      indiceLetra++;
    }
    if (indiceLetra >= letraCancion.length) clearInterval(check);
  }, 100);
}

boton.addEventListener("click", () => {
  indice++;
  if (indice >= mensajes.length) {
    pantallaInicial.style.display = "none";
    contenidoPrincipal.classList.add("mostrar");
    musica.play();

    mostrarLetraSincronizada();
    setInterval(crearPalabra, 800);
    setInterval(crearCorazon, 400);
    return;
  }
  actualizarBoton();
});

// Primera posición del botón
actualizarBoton();
