// Existing utility functions
function get(valor) {
    return document.getElementById(valor).value;
}

function set(idControl, valor) {
    return document.getElementById(idControl).value = valor;
}

function setN(namecontrol, valor) {
    document.getElementsByName(namecontrol)[0].value = valor;
}

function LimpiarDatos(idFormulario) {
    let elementosName = document.querySelectorAll('#' + idFormulario + ' [name]');
    let elementoActual;
    for (let i = 0; i < elementosName.length; i++) {
        elementoActual = elementosName[i];
        setN(elementoActual.name, "");
    }
}

// Enhanced fetch functions
async function fetchGet(url, tiporespuesta, callback) {
    try {
        let raiz = document.getElementById("hdfOculto").value;
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz + url;
        let res = await fetch(urlCompleta);
        let data;
        if (tiporespuesta === "json")
            data = await res.json();
        else if (tiporespuesta === "text")
            data = await res.text();
        callback(data);
    } catch (e) {
        alert("Algo salió mal: " + e.message);
    }
}

async function fetchPost(url, tiporespuesta, frm, callback) {
    try {
        let raiz = document.getElementById("hdfOculto").value;
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz + url;
        let res = await fetch(urlCompleta, {
            method: "POST",
            body: frm
        });
        let data;
        if (tiporespuesta === "json")
            data = await res.json();
        else if (tiporespuesta === "text")
            data = await res.text();
        callback(data);
    } catch (e) {
        console.error(e);
        alert("Ocurrió un problema en POST: " + e.message);
    }
}

// Enhanced table generation
let objConfigurationGlobal;

function pintar(objConfiguration) {
    objConfigurationGlobal = objConfiguration;

    // Set default values
    objConfigurationGlobal.divContenedorTabla = objConfigurationGlobal.divContenedorTabla || "divTabla";
    objConfigurationGlobal.editar = objConfigurationGlobal.editar || false;
    objConfigurationGlobal.eliminar = objConfigurationGlobal.eliminar || false;

    if (objConfiguration.datos) {
        // Use provided data directly
        let contenido = "";
        contenido += `<div id='${objConfigurationGlobal.divContenedorTabla}'>`;
        contenido += generarTabla(objConfiguration.datos);
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML = contenido;
    } else {
        // Fetch data from server
        fetchGet(objConfiguration.url, "json", function (res) {
            let contenido = "";
            contenido += `<div id='${objConfigurationGlobal.divContenedorTabla}'>`;
            contenido += generarTabla(res);
            contenido += "</div>";
        document.getElementById("divtabla").innerHTML = contenido;
        });
    }
}

function generarTabla(res) {
    if (!res || res.length === 0) {
        return "<p>No se encontraron resultados</p>";
    }

    let contenido = "";
    let cabeceras = objConfigurationGlobal.cabeceras;
    let propiedades = objConfigurationGlobal.propiedades;

    contenido += "<table class='table'>";
    contenido += "<thead><tr>";

    // Generate headers
    for (let i = 0; i < cabeceras.length; i++) {
        contenido += "<th>" + cabeceras[i] + "</th>";
    }

    // Add operations column if edit or delete is enabled
    if (objConfigurationGlobal.editar || objConfigurationGlobal.eliminar) {
        contenido += "<th>Operaciones</th>";
    }

    contenido += "</tr></thead><tbody>";

    // Generate rows
    for (let i = 0; i < res.length; i++) {
        let obj = res[i];
        contenido += "<tr>";

        // Add data cells
        for (let j = 0; j < propiedades.length; j++) {
            let propiedadActual = propiedades[j];
            contenido += "<td>" + obj[propiedadActual] + "</td>";
        }

        // Add operation buttons
        if (objConfigurationGlobal.editar || objConfigurationGlobal.eliminar) {
            contenido += "<td>";
            if (objConfigurationGlobal.editar) {
                contenido += `<button class="btn btn-info btn-sm" onclick="editarRegistro(${obj[propiedades[0]]})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                </button>`;
            }
            if (objConfigurationGlobal.eliminar) {
                contenido += `<button class="btn btn-danger btn-sm ms-1" onclick="eliminarRegistro(${obj[propiedades[0]]})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </button>`;
            }
            contenido += "</td>";
        }

        contenido += "</tr>";
    }

    contenido += "</tbody></table>";
    return contenido;
}