window.onload = function () {
    listarSucursales();
}

let objSucursal;

async function listarSucursales() {
    objSucursal = {
        url: "Sucursal/listarSucursales",
        cabeceras: ["ID Sucursal", "Nombre", "Dirección"],
        propiedades: ["iidsucursal", "nombre", "direccion"],
        divContenedorTabla: "divTabla"
    };
    pintar(objSucursal);
}

function BuscarSucursal() {
    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);
    fetchPost("Sucursal/filtrarSucursal", "json", frm, function (res) {
        console.log('Datos recibidos del filtro:', res); // Agregar este log
        objSucursal.datos = res;
        pintar(objSucursal);
    });
}
function LimpiarDatos(idFormulario) {
    const form = document.getElementById(idFormulario);
    const elementos = form.querySelectorAll('input[type="text"]');
    elementos.forEach(elemento => {
        elemento.value = '';
    });
}