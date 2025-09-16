// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "En la soledad", time: 12 },
  { text: "Escuché un suspiro", time: 13.5 },
  { text: "Era mi interior", time: 23 },
  { text: "Deseando estar contigo", time: 28 },
  { text: "No es casualidad", time: 35.5 },
  { text: "El tiempo ni el camino", time: 38 },
  { text: "Que nos preparó", time: 46.5 },
  { text: "Para lo que vivimos", time: 51 },
  { text: "Somos como sombras", time: 59 },
  { text: "Que bailan a la luz de una vela", time: 63.5 },
  { text: "Somos un par de navegantes", time: 70.5 },
  { text: "Creyendo en más que posibilidades", time: 75.5 },
  { text: "Somos como gotas", time: 82 },
  { text: "Encontrándose en el mar azul", time: 86.5 },
  { text: "Ah ah ah, ah ah, ah", time: 96 },
  { text: "Noche que cambió", time: 105.5 },
  { text: "Lo que de amor pensaba", time: 108 },
  { text: "Esto ha sido más", time: 118 },
  { text: "De lo que imaginaba", time: 122 },
  { text: "Oh oh oh, oh oh", time: 126 },
  { text: "De la lluvia al sol", time: 128.5 },
  { text: "Bailaremos juntos", time: 134 },
  { text: "La historia de este amor", time: 141 },
  { text: "Fué escrita antes que el mundo", time: 146 },
  { text: "Somos como sombras", time: 153 },
  { text: "Que bailan a la luz de una vela", time: 158.5 },
  { text: "Somos un par de navegantes", time: 165 },
  { text: "Creyendo en más que posibilidades", time: 170 },
  { text: "Somos como gotas", time: 178 },
  { text: "Encontrándose en el mar azul", time: 181 },
  { text: "Uh, uh, uh... Uh, uh, uh... Uh uh uh, uh uh", time: 188 },
  { text: "Pues nadie más me puede enamorar", time: 203 },
  { text: "ES SU SONRISA VIDA AL DESPERTAR", time: 209 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);