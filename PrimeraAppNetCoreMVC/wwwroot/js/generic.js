async function fetchGet(url, tiporespuesta, callback) {
    try {
        let raiz = document.getElementById("hdfOculto").value;

        //http://localhost....
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz + url;
        let res = await fetch(urlCompleta);

        if (tiporespuesta == "json")
            res = await res.json();
        else if (tiporespuesta == "text")
            res = await res.text();

        //Json
        callback(res)
    } catch (e) {
        alert("algo salio mal");
    }
}