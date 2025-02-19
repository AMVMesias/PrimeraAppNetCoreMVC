function get(valor) {
    return document.getElementById(valor).value;
}

function set(idControl, valor) {
    return document.getElementById(idControl).value = valor;
}


function setN(namecontrol, valor) {
    document.getElementById(namecontrol)[0].value = valor
}

function LimpiarDatos(idFormulario) {
    let elementosName = document.querySelectorAll('#' + idFormulario + "[name]")
    let elementoActual;
    for (let i = 0; i < elementosName.length; i++) {
        elementoActual = elementosName[i];
        elementosName = elementoActual.name;
        setN(elementosName,"")
    }

}

async function fetchGet(url, tiporespuesta, callback) {
    try {
        let raiz = document.getElementById("hdfOculto").value;
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz + url;
        let res = await fetch(urlCompleta);
        let data;
        if (tiporespuesta == "json")
            data = await res.json();
        else if (tiporespuesta == "text")
            data = await res.text();
        callback(data);
    } catch (e) {
        alert("algo salio mal " + e.message);
    }
}

let objConfigurationGlobal;

function pintar(objConfiguration) {
    objConfigurationGlobal = objConfiguration;
    if (objConfiguration.datos) {
        // Si ya tenemos datos, los usamos directamente
        let contenido = "";
        contenido += "<div id='divContenedor'>";
        contenido += generarTabla(objConfiguration.datos);
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML = contenido;
    } else {
        // Si no hay datos, los obtenemos del servidor
        fetchGet(objConfiguration.url, "json", function (res) {
            let contenido = "";
            contenido += "<div id='divContenedor'>";
            contenido += generarTabla(res);
            contenido += "</div>";
            document.getElementById("divTabla").innerHTML = contenido;
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
    contenido += "<thead>";
    contenido += "<tr>";
    for (var i = 0; i < cabeceras.length; i++) {
        contenido += "<th>" + cabeceras[i] + "</th>";
    }
    contenido += "</tr>";
    contenido += "</thead>";
    let nroRegistros = res.length;
    let obj;
    let propiedadActual;
    contenido += "<tbody>";
    for (let i = 0; i < nroRegistros; i++) {
        obj = res[i];
        contenido += "<tr>";
        for (let j = 0; j < propiedades.length; j++) {
            propiedadActual = propiedades[j];
            contenido += "<td>" + obj[propiedadActual] + "</td>";
        }
        contenido += "</tr>";
    }
    contenido += "</tbody></table>";
    return contenido;
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
        if (tiporespuesta == "json")
            data = await res.json();
        else if (tiporespuesta == "text")
            data = await res.text();
        callback(data);
    } catch (e) {
        console.error(e);
        alert("Ocurrio un problema en POST: " + e.message);
    }
}