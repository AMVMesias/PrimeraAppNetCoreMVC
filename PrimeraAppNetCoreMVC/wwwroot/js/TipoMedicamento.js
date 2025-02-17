﻿window.onload = function () {
    listarTipoMedicamento();
    document.getElementById("btnBuscar").addEventListener("click", BuscarTipoMedicamento);
}
let objTipoMedicamento;

async function listarTipoMedicamento() {
    objTipoMedicamento = {
        url: "TipoMedicamento/listarTipoMedicamento",
        cabeceras: ["ID Tipo de Medicamento", "Nombre", "Descripción"],
        propiedades: ["idMedicamento", "nombre", "descripcion"]
    };
    pintar(objTipoMedicamento);
}

function BuscarTipoMedicamento() {
    let nombreTipoMedicamento = document.getElementById("txtNombreBusqueda").value;
    objTipoMedicamento.url = "TipoMedicamento/filtrarTipoMedicamento?nombreTipoMedicamento=" + nombreTipoMedicamento,
    pintar(objTipoMedicamento);
}

function LimpiarControl() {
    listarTipoMedicamento(); 
    document.getElementById("txtNombreBusqueda").value = "";

}

