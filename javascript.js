// Obtén el elemento canvas y su contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let dibujando = false;
let color = "black"; // Color de dibujo inicial (negro)

// Función para empezar a dibujar
function iniciarDibujo(event) {
    dibujando = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Función para dibujar mientras se mueve el ratón
function dibujar(event) {
    if (!dibujando) return;
    ctx.strokeStyle = color; // Establece el color de la línea
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
}

// Función para dejar de dibujar
function detenerDibujo() {
    dibujando = false;
    ctx.closePath();
}

// Agrega los event listeners para el mouse
canvas.addEventListener("mousedown", iniciarDibujo);
canvas.addEventListener("mousemove", dibujar);
canvas.addEventListener("mouseup", detenerDibujo);
canvas.addEventListener("mouseout", detenerDibujo);

// Event Listeners para los botones de color
document.getElementById("rojo").addEventListener("click", function() {
    color = "red"; // Cambia el color a rojo cuando se hace clic en el botón rojo
});

document.getElementById("azul").addEventListener("click", function() {
    color = "blue"; // Cambia el color a azul cuando se hace clic en el botón azul
});

document.getElementById("negro").addEventListener("click", function() {
    color = "black"; // Cambia el color a negro cuando se hace clic en el botón negro
});