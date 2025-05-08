const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Imposta la dimensione del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caratteri da visualizzare
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえお";
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array di "gocce" (una per colonna)
const drops = Array.from({ length: columns }).fill(1);

// Funzione per disegnare il frame
function drawMatrix() {
  // Sfondo nero con trasparenza per l'effetto scia
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Colore del testo
  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset casuale per far ricadere le lettere
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Ridisegna ogni 33ms (~30 fps)
setInterval(drawMatrix, 33);

// Riadatta il canvas quando la finestra cambia dimensione
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
