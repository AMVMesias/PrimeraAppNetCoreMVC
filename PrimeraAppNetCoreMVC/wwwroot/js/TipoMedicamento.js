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

    Confirmacion(undefined, undefined, function (rpta) {
        fetchpost("TipoMedicamento/GuardarDatos", "text", frm, function (res) {
            if (res == "1") {
                Exito();
                listarTipoMedicamento();
                LimpiarFormulario();
            } else {
                Error();
            }
        });
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

    fetchGet("TipoMedicamento/recuperarTipoMedicamento/?idTipoMedicamento=" + id, "json", function (data) {
        if (!data) {
            Error();
            return;
        }

        let idInput = document.getElementById("idMedicamentoEditar");
        let nombreInput = document.getElementById("nombreEditar");
        let descripcionInput = document.getElementById("descripcionEditar");

        if (idInput && nombreInput && descripcionInput) {
            idInput.value = data.idMedicamento;
            nombreInput.value = data.nombre;
            descripcionInput.value = data.descripcion;

            let modalElement = document.getElementById('modalEditar');
            if (modalElement) {
                var modal = new bootstrap.Modal(modalElement);
                modal.show();
            }
        } else {
            console.error('No se encontraron los elementos del formulario');
        }
    });
}



function Eliminar(id) {
    fetchGet("TipoMedicamento/recuperarTipoMedicamento/?idTipoMedicamento=" + id, "json", function (medicamento) {
        if (medicamento) {
            Confirmacion("Eliminar registro", `¿Está seguro que desea eliminar "${medicamento.nombre}"?`, function () {
                fetchGet("TipoMedicamento/eliminarTipoMedicamento/?id=" + id, "text", function (data) {
                    if (data == "1") {
                        Notificacion("success", `Se eliminó "${medicamento.nombre}" correctamente`, "¡Eliminado!");
                        listarTipoMedicamento();
                    } else {
                        Notificacion("error", `No se pudo eliminar "${medicamento.nombre}"`, "¡Error!");
                    }
                });
            });
        }
    });
}
function GuardarEdicion() {
    let frmEditar = document.getElementById("frmEditar")
    let frm = new FormData(frmEditar);

    Confirmacion("Confirmar edición", "¿Desea guardar los cambios?", function () {
        fetchpost("TipoMedicamento/GuardarDatos", "text", frm, function (res) {
            if (res == "1") {
                Exito();
                listarTipoMedicamento();
                var modal = bootstrap.Modal.getInstance(document.getElementById('modalEditar'));
                modal.hide();
            } else {
                Error();
            }
        });
    });
}