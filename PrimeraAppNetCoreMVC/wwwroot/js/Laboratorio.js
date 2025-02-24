window.onload = function () {
    listarLaboratorios();
}

let objLaboratorio;

async function listarLaboratorios() {
    objLaboratorio = {
        url: "Laboratorio/listarLaboratorios",
        cabeceras: ["ID Sucursal", "Nombre", "Dirección", "Contacto"],
        propiedades: ["iidlaboratorio", "nombre", "direccion", "personacontacto"],
        divContenedorTabla: "divTabla",
        editar: true,
        eliminar: true
    };
    pintar(objLaboratorio);
}

function BuscarLaboratorio() {
    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);
    fetchPost("Laboratorio/filtrarLaboratorio", "json", frm, function (res) {
        objLaboratorio.datos = res;
        pintar(objLaboratorio);
    });
}

function LimpiarFormulario() {
    LimpiarDatos("frmBusqueda");
    //document.getElementById("frmBusqueda").reset();
    //objLaboratorio.datos = null;
    listarLaboratorios();
}