// Selecciona todos los botones de los certificados
const botones = document.querySelectorAll(".ver-certificado");

// Agrega el evento 'click' a cada botón
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        // Obtén el documento desde el atributo 'data-documento'
        const documento = boton.getAttribute("data-documento");

        // Abre el documento en una nueva pestaña
        window.open(documento, "_blank");
    });
});

