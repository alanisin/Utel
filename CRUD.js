(function(){
//------------------------------------------------------------------>Variables
var cantidad = document.getElementById("cantidad");
var color = document.getElementById("color");
var talla = document.getElementById("talla");
var cantidad = document.getElementById("cantidad");
var btnagregarpedido = document.getElementById("agregar-pedido");
var lista = document.getElementById("lista-pedido");
var listadentro = document.getElementById("lista_dentro");
var editarpedido = document.getElementById("editar");
var eliminarpedido = document.getElementById("eliminar");
    

//------------------------------------------------------------------>Funciones
var agregarPedido = function(){
    var cantidadplayera = cantidad.value;
    var contenido = document.createTextNode(cantidadplayera);
    var nuevopedido = document.createElement("li")
    var eliminar = document.createElement("div")
    var editar = document.createElement("div")

    nuevopedido.appendChild(contenido);
    nuevopedido.className ="Contenedor lista";
    lista.appendChild(nuevopedido);
    
    nuevopedido.appendChild(editar);
    nuevopedido.appendChild(editar).addEventListener("click",editarpedidos);
    editar.append("Editar")
    editar.className ="editar";

    nuevopedido.appendChild(eliminar);
    nuevopedido.appendChild(eliminar).addEventListener("click",eliminarpedidos);
    eliminar.append("Eliminar")
    eliminar.className ="eliminar";
 

};

var eliminarpedidos = function(){
    var a= EventTarget;
    console.log(a);
   //lista.removeChild(a);
   

};
var editarpedidos = function(){

    alert("Edicion correcta");
};

//------------------------------------------------------------------>Eventos
btnagregarpedido.addEventListener("click",agregarPedido);
editarpedido.addEventListener("click",editarpedidos);
eliminarpedido.addEventListener("click",eliminarpedidos);
}());
