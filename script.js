function crearCarrusel(contenedorSelector) {
    const contenedor = document.querySelector(contenedorSelector);
    if (!contenedor) return;

    const slider = contenedor.querySelector(".img-slider");
    const imagenes = contenedor.querySelectorAll(".img-slider img");
    const btnAnt = contenedor.querySelector(".fa-angles-left");
    const btnSig = contenedor.querySelector(".fa-angles-right");

    let indice = 0;
    let intervalo;

    function actualizarGaleria() {
        slider.style.transform = `translateX(${-indice * 100}%)`;
    }

    function avanzarFoto() {
        indice++;
        if (indice >= imagenes.length) indice = 0;
        actualizarGaleria();
    }

    function retrocederFoto() {
        indice--;
        if (indice < 0) indice = imagenes.length - 1;
        actualizarGaleria();
    }

    function iniciarAuto() {
        intervalo = setInterval(avanzarFoto, 5000);
    }

    function reiniciarAuto() {
        clearInterval(intervalo);
        iniciarAuto();
    }

    btnSig.addEventListener("click", () => {
        avanzarFoto();
        reiniciarAuto();
    });

    btnAnt.addEventListener("click", () => {
        retrocederFoto();
        reiniciarAuto();
    });

    iniciarAuto();
}

// Ahora iniciamos los 2 carruseles por separado
crearCarrusel(".card-slider-1");
crearCarrusel(".card-slider-2");
crearCarrusel(".card-slider-3");
crearCarrusel(".card-slider-4");