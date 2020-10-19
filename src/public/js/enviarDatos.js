function enviarDatos() {
    var nombre = localStorage.getItem("nombreUsuario");
    document.getElementById("mostrarDato1").innerHTML = nombre;
    document.getElementById("mostrarDato2").innerHTML = nombre;
}

