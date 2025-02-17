window.onload = function () {
    document.getElementById("btnGuardar").addEventListener("click", guardarSucursal);
}

async function guardarSucursal() {
    let sucursal = {
        IIDSUCURSAL: document.getElementById("iidsucursal").value,
        NOMBRE: document.getElementById("nombre").value,
        DIRECCION: document.getElementById("direccion").value,
        NOMBREFOTOSUCURSAL: document.getElementById("nombrefotosucursal").value
    };

    let fileInput = document.getElementById("fotosucursal");
    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            sucursal.FOTOSUCURSAL = e.target.result.split(',')[1]; // Convertir a base64
            enviarDatos(sucursal);
        };
        reader.readAsDataURL(file);
    } else {
        enviarDatos(sucursal);
    }
}

async function enviarDatos(sucursal) {
    console.log("Datos enviados:", sucursal); // Agregar log para verificar los datos enviados
    let response = await fetch('/Guardar/GuardarSucursal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sucursal)
    });

    if (response.ok) {
        alert("Sucursal guardada exitosamente");
    } else {
        alert("Error al guardar la sucursal");
    }
}

