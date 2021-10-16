
//---------------------------------------Ejercicio 1
function impar() {
    //PAR O IMPAR
    var numero = prompt("Validar impar: ¿Ingresa un numero?", "")
    if (numero % 2!= 0) {
        alert("el numero " + numero + " es un numero IMPAR");
    }
    else {
        alert("el numero " + numero + " no es IMPAR");
    }
}
//---------------------------------------Ejercicio 2
function ejercicio1() {
    //iNGRESAR NOMBRE
    var nombre = prompt("Nombre completo:Ingresa tu nombre")
    if (nombre!=null) {
        var apellido = prompt("Ingresa tu apellido");
        alert("tu nombre es "+ nombre +" " +apellido);
    }
    else {
        alert("vacio");
    }
}
function ejercicio2() {
    //VALIDAR PERMISOS
    var nombre_completo = prompt("Validar permisos: Ingresa tu nombre")
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



function ejercicio3() {
    //CALIFICACIONES 
    var calificacion=1;
    var cal=0;
    var suma=0;
    var nombre_completo = prompt("Calificaciones: Ingresa tu nombre");
  while(calificacion<=5)
  {
    var cal =prompt("Ingresa la calificacion "+ calificacion +"-"+suma);
    suma+=Number(cal);
    calificacion++;
  }
  var final=Number(suma)/5;
  if(final>70){

    alert(nombre_completo+" Pasaste tu calificacion es " + final);
  }
else{
    alert(nombre_completo+" Reprobaste tu calificacion es " + final);

}  

}


function ejercicio4() {
    //nUMEROS PARES
    var numero = prompt("Numeros par: Ingresa un numero de pares")
    var a=1;
    var x=0;
    if (numero!=null) {
    
        while(a<=numero)
        {
            var x=x+2
            alert("solicitaste " +numero +" el par numero "+ a +" es " +x );
            a++;
        }
        
}
else{
    alert("bye");

}
}