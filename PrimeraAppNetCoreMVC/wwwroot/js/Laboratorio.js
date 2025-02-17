window.onload = function () {
    listarLaboratorios();
}


let objLaboratorio;

async function listarLaboratorios() {
    objLaboratorio = {
        url: "Laboratorio/listarLaboratorios",
        cabeceras: ["ID Sucursal", "Nombre", "Dirección", "Contacto"],
        //recuerda que solo en minusculas jala sisisi 
        propiedades: ["iidlaboratorio", "nombre", "direccion", "personacontacto"]
    };
    pintar(objLaboratorio);
}

function BuscarLaboratorio() {

    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);
}