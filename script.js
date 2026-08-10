// ==========================================
// INFORMACIÓN DE LAS ETAPAS DEL TERREMOTO
// ==========================================

const etapas = {

    antes: {
        titulo: "📋 Antes del terremoto",
        recomendaciones: [
            "Identifica lugares seguros dentro de tu vivienda.",
            "Prepara un kit de emergencia.",
            "Conoce las rutas de evacuación.",
            "Mantén los documentos importantes protegidos."
        ]
    },

    durante: {
        titulo: "⚠️ Durante el terremoto",
        recomendaciones: [
            "Mantén la calma.",
            "Protégete debajo de una mesa resistente.",
            "Aléjate de ventanas y objetos que puedan caer.",
            "No corras hacia las escaleras mientras está temblando."
        ]
    },

    despues: {
        titulo: "✅ Después del terremoto",
        recomendaciones: [
            "Verifica si hay personas heridas.",
            "Revisa posibles fugas de gas.",
            "Sigue la información de fuentes oficiales.",
            "Prepárate para posibles réplicas."
        ]
    }

};


// ==========================================
// INFORMACIÓN DEL KIT DE EMERGENCIA
// ==========================================

const informacionKit = {

    agua: {
        titulo: "💧 Agua",
        texto: "Mantén agua potable suficiente para todos los miembros de la familia. Es fundamental para mantenerse hidratado durante una emergencia."
    },

    alimentos: {
        titulo: "🥫 Alimentos",
        texto: "Guarda alimentos no perecederos y fáciles de consumir, como conservas, barras energéticas y otros alimentos que no necesiten refrigeración."
    },

    linterna: {
        titulo: "🔦 Linterna",
        texto: "Una linterna permite iluminar lugares oscuros cuando se interrumpe el suministro eléctrico."
    },

    pilas: {
        titulo: "🔋 Pilas",
        texto: "Ten pilas nuevas o recargables para utilizar la linterna, radio y otros dispositivos durante una emergencia."
    },

    radio: {
        titulo: "📻 Radio",
        texto: "Una radio portátil permite recibir información y recomendaciones oficiales cuando no hay conexión a internet."
    },

    botiquin: {
        titulo: "🩹 Botiquín",
        texto: "Debe contener elementos básicos para atender heridas menores, como gasas, vendas, antiséptico y otros materiales de primeros auxilios."
    },

    celular: {
        titulo: "📱 Celular",
        texto: "Mantén el celular cargado para poder comunicarte con familiares y servicios de emergencia cuando sea necesario."
    },

    powerbank: {
        titulo: "🔌 Power Bank",
        texto: "Una batería portátil permite cargar el celular cuando no hay electricidad disponible."
    },

    documentos: {
        titulo: "🪪 Documentos",
        texto: "Guarda documentos importantes en un lugar seguro y, si es posible, conserva copias digitales protegidas."
    },

    mascarillas: {
        titulo: "😷 Mascarillas",
        texto: "Pueden ayudar a proteger las vías respiratorias frente al polvo y partículas que pueden aparecer después de un terremoto."
    },

    guantes: {
        titulo: "🧤 Guantes",
        texto: "Los guantes pueden proteger las manos al manipular objetos, escombros o materiales durante una emergencia."
    },

    silbato: {
        titulo: "🚨 Silbato",
        texto: "Un silbato puede servir para emitir señales de auxilio y facilitar que otras personas localicen a alguien."
    }

};


// ==========================================
// ELEMENTOS DEL HTML
// ==========================================

const botonesEtapa = document.querySelectorAll(".etapa-btn");

const tituloEtapa = document.getElementById("titulo-etapa");

const recomendaciones = document.getElementById("recomendaciones");

const tarjetasKit = document.querySelectorAll(".kit-card");

const modal = document.getElementById("modal");

const modalTitulo = document.getElementById("modal-titulo");

const modalTexto = document.getElementById("modal-texto");

const cerrarModal = document.getElementById("cerrar-modal");

const respuestas = document.querySelectorAll(".respuesta");

const resultado = document.getElementById("resultado");


// ==========================================
// MOSTRAR UNA ETAPA
// ==========================================

function mostrarEtapa(nombreEtapa) {

    const etapa = etapas[nombreEtapa];

    if (!etapa) {
        return;
    }

    tituloEtapa.textContent = etapa.titulo;

    recomendaciones.innerHTML = "";

    etapa.recomendaciones.forEach(function (recomendacion) {

        const li = document.createElement("li");

        li.textContent = recomendacion;

        recomendaciones.appendChild(li);

    });

}


// ==========================================
// BOTONES ANTES / DURANTE / DESPUÉS
// ==========================================

botonesEtapa.forEach(function (boton) {

    boton.addEventListener("click", function () {

        botonesEtapa.forEach(function (b) {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");

        const etapaSeleccionada = boton.dataset.etapa;

        mostrarEtapa(etapaSeleccionada);

    });

});


// ==========================================
// ABRIR INFORMACIÓN DEL KIT
// ==========================================

tarjetasKit.forEach(function (tarjeta) {

    tarjeta.addEventListener("click", function () {

        const elemento = tarjeta.dataset.kit;

        const informacion = informacionKit[elemento];

        if (!informacion) {
            return;
        }

        modalTitulo.textContent = informacion.titulo;

        modalTexto.textContent = informacion.texto;

        modal.classList.add("mostrar");

    });

});


// ==========================================
// CERRAR MODAL
// ==========================================

cerrarModal.addEventListener("click", function () {

    modal.classList.remove("mostrar");

});


// Cerrar haciendo clic fuera de la ventana

modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {

        modal.classList.remove("mostrar");

    }

});


// Cerrar con la tecla ESC

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        modal.classList.remove("mostrar");

    }

});


// ==========================================
// MINI QUIZ
// ==========================================

const respuestaCorrecta = document.querySelector(".respuesta.correcta");

const respuestaIncorrecta = document.querySelector(".respuesta.incorrecta");


respuestaCorrecta.addEventListener("click", function () {

    resultado.textContent = "✅ ¡Correcto! Protégete debajo de una mesa resistente.";

    resultado.className = "correcto";

});


respuestaIncorrecta.addEventListener("click", function () {

    resultado.textContent = "❌ Incorrecto. Correr durante un sismo puede ser peligroso.";

    resultado.className = "incorrecto";

});


// ==========================================
// INICIAR LA APLICACIÓN
// ==========================================

mostrarEtapa("antes");

console.log("🌎 Aplicación de terremotos iniciada correctamente.");