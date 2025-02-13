window.onload = function () {
    listarSucursales();
}

async function listarSucursales() {
    pintar({
        url: "Sucursal/listarSucursales",
        cabeceras: ["ID Sucursal", "Nombre", "Dirección"],
        propiedades: ["iidsucursal", "nombre", "direccion"]  // Cambia a minúsculas
    });
}
