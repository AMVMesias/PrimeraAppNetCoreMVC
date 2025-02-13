async function fetchGet(url, tiporespuesta, callback) {
    try {
        let raiz = document.getElementById("hdfOculto").value;

        //http://localhost....
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz + url;
        let res = await fetch(urlCompleta);
        let data;

        if (tiporespuesta == "json")
            data = await res.json();
        else if (tiporespuesta == "text")
            data = await res.text();

        //Json
        callback(data);
    } catch (e) {
        alert("algo salio mal " + e.message);
    }
}
let objConfigurationGlobal;


// url: "", nombrecolumnas[], nombrepropiedades:[]
function pintar(objConfiguration) {
    objConfigurationGlobal = objConfiguration;

    fetchGet(objConfiguration.url, "json", function (res) {

        let contenido = "";
        contenido += "<div id='divContenedor'>";
        contenido += generarTabla(res);
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML = contenido;
    });
}

function generarTabla(res) {
    let contenido = "";

    let cabeceras = objConfigurationGlobal.cabeceras;
    let propiedades = objConfigurationGlobal.propiedades;

    

    contenido += "<table class='table table-dark table-hover'>";
        contenido += "<thead>";

        /*Primera fila de la tabla con los headers*/

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