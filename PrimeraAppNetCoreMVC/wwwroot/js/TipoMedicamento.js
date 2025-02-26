window.onload = function () {
    listarTipoMedicamento();
}

let objTipoMedicamento;

async function listarTipoMedicamento() {
    objTipoMedicamento = {
        url: "TipoMedicamento/listarTipoMedicamento",
        cabeceras: ["ID Tipo de Medicamento", "Nombre", "Descripción"],
        propiedades: ["idMedicamento", "nombre", "descripcion"],
        divContenedorTabla: "divContenedorTabla",
        editar: true,
        eliminar: true,
        propiedadId: "idMedicamento"
    };
    pintar(objTipoMedicamento);
}

function filtrarTipoMedicamento() {
    let nombre = get("txtNombreBusqueda");
    if (nombre === "") {
        listarTipoMedicamento();
    } else {
        objTipoMedicamento.url = "TipoMedicamento/filtrarTipoMedicamento?nombreTipoMedicamento=" + nombre;
        pintar(objTipoMedicamento);
    }
}

function GuardarTipoMedicamento() {
    let frmGuardar = document.getElementById("frmGuardar")
    let frm = new FormData(frmGuardar);
    fetchpost("TipoMedicamento/GuardarDatos", "text", frm, function (res) {
        if (res == "1") {
            listarTipoMedicamento();
            LimpiarFormulario();
        }
    });
}

function LimpiarFormulario() {
    LimpiarDatos("frmGuardar");
    listarTipoMedicamento();
}

function Editar(id) {
    if (!id) {
        console.error('ID no válido');
        return;
    }

    fetchGet("TipoMedicamento/recuperarTipoMedicamento?idTipoMedicamento=" + id, "json", function (data) {
        console.log("Datos recibidos en Editar:", data);

        if (!data) {
            alert("Error al recuperar los datos");
            return;
        }

        // Asignar valores directamente ya que el controlador devuelve el objeto TipoMedicamentoCLS
        setN("idMedicamento", data.idMedicamento);
        setN("nombre", data.nombre);
        setN("descripcion", data.descripcion);
    });
}



function Eliminar(id) {
    if (confirm("¿Desea eliminar este registro?")) {
        fetchGet("TipoMedicamento/eliminarTipoMedicamento/?id=" + id, "text", function (data) {
            if (data == "1") {
                listarTipoMedicamento();
            }
        });
    }
}