

function registrar(){
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
var usuario = new Object();
usuario.nombre = nombre;
usuario.email = email;
usuario.password=password;
console.log(usuario);
}