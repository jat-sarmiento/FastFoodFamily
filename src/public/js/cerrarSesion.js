var usuario = sessionStorage.getItem("usuario"); //getItem  

function cerrarSesion() {
    if(usuario != null) {
    sessionStorage.clear("usuario");
    sessionStorage.clear("contraseña");
    location.href="login.html";
    }
}

function iniciarSesion(){
    if(usuario == null) {
    alert("Iniciar Sesión");
    location.href="login.html";
    }
}
iniciarSesion();