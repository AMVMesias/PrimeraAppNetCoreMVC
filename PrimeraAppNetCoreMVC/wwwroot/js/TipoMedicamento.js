window.onload = function () {
    listarTipoMedicamento();
}


async function listarTipoMedicamento() {

    pintar({
        url: "TipoMedicamento/listarMedicamento",
        cabeceras: ["id Tipo de medicamento", "nombre", "descripcion"],
        propiedades: ["idMedicamento", "nombre", "descripcion"]


    })
}

