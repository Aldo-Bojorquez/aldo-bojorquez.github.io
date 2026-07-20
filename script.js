// 1. Seleccionamos los elementos de tu HTML usando sus clases
const slider = document.querySelector(".img-slider");
const imagenes = document.querySelectorAll(".img-slider img");
const btnAnt = document.querySelector(".fa-angles-left");
const btnSig = document.querySelector(".fa-angles-right");

let indice = 0;
let intervalo;

// 2. Función que mueve físicamente el contenedor hacia la izquierda
function actualizarGaleria() {
    slider.style.transform = `translateX(${-indice * 100}%)`;
}

// 3. Función para ir a la siguiente foto
function avanzarFoto() {
    indice++;
    // Si llega al final de las imágenes, regresa a la primera (0)
    if (indice >= imagenes.length) {
        indice = 0;
    }
    actualizarGaleria();
}

// 4. Función para regresar a la foto anterior
function retrocederFoto() {
    indice--;
    // Si retrocede desde la primera, va a la última foto
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    actualizarGaleria();
}

// 5. Inicia el temporizador automático (5000ms = 5 segundos)
function iniciarAuto() {
    intervalo = setInterval(avanzarFoto, 5000);
}

// 6. Detiene y reinicia el tiempo para que no salte de golpe al hacer clic
function reiniciarAuto() {
    clearInterval(intervalo);
    iniciarAuto();
}

// 7. Conectamos los clics de tus iconos de Font Awesome con las funciones
btnSig.addEventListener("click", () => {
    avanzarFoto();
    reiniciarAuto();
});

btnAnt.addEventListener("click", () => {
    retrocederFoto();
    reiniciarAuto();
});

// 8. Arrancamos la animación automática al cargar la página
iniciarAuto();