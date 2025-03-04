﻿window.onload = function () {
    listarSucursales();
}

let objSucursal;

async function listarSucursales() {
    objSucursal = {
        url: "Sucursal/listarSucursales",
        cabeceras: ["ID Sucursal", "Nombre", "Dirección"],
        propiedades: ["iidsucursal", "nombre", "direccion"],
        editar: true,
        eliminar: true,
        datos: null  
    };
    pintar(objSucursal);
}


function BuscarSucursal() {
    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);
    fetchPost("Sucursal/filtrarSucursal", "json", frm, function (res) {
        console.log("Filtered data:", res);
        objSucursal.datos = res;
        pintar(objSucursal);
    });
}

function LimpiarFormulario() {
    LimpiarDatos("frmBusqueda");
    listarSucursales();
}

function GuardarSucursal() {

    let frmGuardar = document.getElementById("frmGuardarSucursal")
    let frm = new FormData(frmGuardar);
    fetchPost("Sucursal/GuardarSucursal", "text", frm, function (res) {
        if (res == "1") {
            listarSucursales();
            LimpiarSucursal();
        }
    });

}

function LimpiarSucursal() {
    LimpiarDatos("frmGuardarSucursal");
    listarSucursales();
}