
//---------------------------------------Ejercicio 1
function impar() {
    //Ingresamos un mensaje a mostrar
    var numero = prompt("¿Ingresa un numero?", "")
    if (numero % 2!= 0) {
        alert("el numero " + numero + " es un numero IMPAR");
    }
    else {
        alert("el numero " + numero + " no es IMPAR");
    }
}
//---------------------------------------Ejercicio 2
function ejercicio1() {
    //Ingresamos un mensaje a mostrar
    var nombre = prompt("Ingresa tu nombre")
    if (nombre!=null) {
        var apellido = prompt("Ingresa tu apellido");
        alert("tu nombre es "+ nombre +" " +apellido);
    }
    else {
        alert("vacio");
    }
}
function ejercicio2() {
    //Ingresamos un mensaje a mostrar
    var nombre_completo = prompt("Ingresa tu nombre")
    if (nombre_completo!=null) {
        var edad = prompt("Ingresa tu edad")
        if(edad>=18)
        {

            alert("Felicidades "+ nombre_completo +" con " + edad+" años SI puedes solicitar un permiso");
        }
        else{
            alert("Lo sentimos "+ nombre_completo +" con " + edad+" años NO puedes solicitar un permiso");
        }
       
    }
    else {
        alert("vacio");
    }
}