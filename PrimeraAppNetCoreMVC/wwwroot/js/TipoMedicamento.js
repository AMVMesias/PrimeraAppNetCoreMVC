window.onload = function () {
    listarTipoMedicamento();
}


async function listarTipoMedicamento() {


    fetchGet("TipoMedicamento/listarMedicamento", "json", function (res) {
        alert(res);

        //[{ "idMedicamento": 1, "nombre": "Analgésico", "descripcion": "Desc 1" },
        //{ "idMedicamento": 2, "nombre": "Paracetamol", "descripcion": "Desc 2" },
        //{ "idMedicamento": 1, "nombre": "Vitamina C", "descripcion": "Desc 3" }]

        let nroregistros = res.length;
        let contenido = "";
        contenido += "<table class = 'table'>";
        contenido += "<thead>";

        /*Primera fila de la tabla con los headers*/

        contenido += "<tr>";
        contenido += "<td>Tipo de medicamento</td>";
        contenido += "<td>Nombre</td>";
        contenido += "<td>Descripcion</td>";
        contenido += "</tr>";

        contenido += "</thead>";

        alert(nroregistros);
        for (let i = 0; i < nroregistros; i++) {
            obj = res[i];

            contenido += "<tr>";
            contenido += "<td>" + obj.idMedicamento + "</td>";
            contenido += "<td>" + obj.nombre + "</td>";
            contenido += "<td>" + obj.descripcion + "</td>";
            contenido += "</tr>";

        }
        contenido += "</table>";
        document.getElementById("divTabla").innerHTML = contenido;       //for (let i = 0; i < nroregistros; i++) {

    })
    //try {
    //    let raiz = document.getElementById("hdfOculto").value;

    //    //http://localhost....
    //    let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz + "TipoMedicamento/listarTipoMedicamento";
    //    let res = await fetch(urlCompleta);
    //    res = await res.json();

    //    //Json

    //    alert(res);
    //    alert(JSON.stringify(res));
    //} catch(e) {
    //    alert("algo salio mal");
    //}
}

