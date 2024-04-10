function guardarDatos(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;
    const comuna = document.getElementById("comuna").value;

    const datos = {
        Nombre: nombre,
        CorreoElectronico: email,
        Dirección: direccion,
        Comuna: comuna
    };

    alert("Datos ingresados:\n" + JSON.stringify(datos));
}
