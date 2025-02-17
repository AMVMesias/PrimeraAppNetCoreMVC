window.onload = function () {
    listarSucursales();
    document.getElementById("btnBuscar").addEventListener("click", BuscarSucursal);
}

let objSucursal;

async function listarSucursales() {
    objSucursal = {
        url: "Sucursal/listarSucursales",
        cabeceras: ["ID Sucursal", "Nombre", "Dirección"],
        //recuerda que solo en minusculas jala sisisi 
        propiedades: ["iidsucursal", "nombre", "direccion"]
    };
    pintar(objSucursal);
}

function BuscarSucursal() {
    let nombreSucursal = get("txtNombreBusqueda");
    objSucursal.url = "Sucursal/filtrarSucursal?nombresucursal=" + nombreSucursal;
    pintar(objSucursal);
}

function LimpiarControl() {
    listarSucursales();
    document.getElementById("txtNombreBusqueda").value = "";
}

function get(id) {
    return document.getElementById(id).value;
}
function filtrarSucursal() {
    let nombre = get("txtNombreBusqueda")

    if (nombre == "") {
        listarSucursales();
    } else {
        objSucursal.url = "Sucursal/filtrarSucursal?nombresucursal=" + nombre;
        pintar(objSucursal);

    }
}
