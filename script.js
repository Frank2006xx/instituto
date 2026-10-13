
// Seleccionar el formulario y el área de mensajes
const formulario = document.getElementById("formularioRegistro");
const mensaje = document.getElementById("mensaje");

// Mostrar el año actual automáticamente
document.getElementById("anio").textContent = new Date().getFullYear();

// Validar y procesar el formulario
formulario.addEventListener("submit", function (evento) {

    // Evitar que la página se recargue
    evento.preventDefault();

    // Comprobar las validaciones HTML5
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    // Obtener los datos ingresados
    const datos = new FormData(formulario);

    const nombre = datos.get("nombre").trim();
    const correo = datos.get("correo").trim();
    const celular = datos.get("celular").trim();
    const programa = datos.get("programa");

    // Validar que el nombre no esté vacío
    if (nombre.length < 3) {
        mostrarMensaje("Ingresa un nombre válido.", "error");
        return;
    }

    // Validar que el celular tenga exactamente 9 dígitos
    if (!/^[0-9]{9}$/.test(celular)) {
        mostrarMensaje(
            "El celular debe contener exactamente 9 dígitos.",
            "error"
        );
        return;
    }

    // Comprobar que los campos principales tengan información
    if (!correo || !programa) {
        mostrarMensaje(
            "Completa todos los campos obligatorios.",
            "error"
        );
        return;
    }

    // Simulación del procesamiento de una solicitud POST
    // No se realiza ninguna petición a un servidor real.
    const registro = {
        nombre: nombre,
        correo: correo,
        celular: celular,
        programa: programa
    };

    // Mostrar confirmación sin publicar los datos personales
    console.log("Registro simulado:", registro);

    mostrarMensaje(
        "¡Registro validado correctamente! Tu solicitud se ha " +
        "simulado en esta página. No se guardó en un servidor.",
        "exito"
    );

    formulario.reset();
});

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo;
}
