function login(usuario, contraseña){
    event.preventDefault();
    
    if (usuario == "admin" && contraseña == "root") {
        alert("Bienvenido administrador");
        location.href = "usuario.html";
    }

    if(usuario == "" && contraseña == ""){
        alert("Ingrese usuario y contraseña");
    }
    else if (usuario == ""){
        alert("Ingrese un usuario");
    }
    else if (contraseña == ""){
        alert("Ingrese una contraseña");
    }
    else if (usuario != localStorage.getItem("usuario")){
        alert("El usuario o la contraseña es incorrecta");
    }
    else if (contraseña != localStorage.getItem("contraseña")){
        alert("El usuario o la contraseña es incorrecta");
    }
    else if (usuario == localStorage.getItem("usuario") && contraseña == localStorage.getItem("contraseña")) { 
        let nombre =  localStorage.getItem("nombreUsuario");
        guardarDatos(usuario, contraseña);
        location.href = "usuario.html";
    } 
}

function guardarDatos(usuario, contraseña) {
    sessionStorage.setItem("usuario", usuario);
    sessionStorage.setItem("contraseña", contraseña);
}

var usuarios = [];