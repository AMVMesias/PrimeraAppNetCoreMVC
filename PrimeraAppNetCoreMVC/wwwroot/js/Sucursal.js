window.onload = function () {
    listarSucursales();
}

let objSucursal;

async function listarSucursales() {
    objSucursal = {
        url: "Sucursal/listarSucursales",
        cabeceras: ["ID Sucursal", "Nombre", "Dirección"],
        propiedades: ["iidsucursal", "nombre", "direccion"],
        divContenedorTabla: "divTabla",
        datos: null  // Add this property
    };
    pintar(objSucursal);
}

function BuscarSucursal() {
    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);
    fetchPost("Sucursal/filtrarSucursal", "json", frm, function (res) {
        // Add console.log to debug the response
        console.log("Filtered data:", res);
        objSucursal.datos = res;
        pintar(objSucursal);
    });
}

function LimpiarFormulario() {
    LimpiarDatos("frmBusqueda");
    listarSucursales();
}