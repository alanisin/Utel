
    //UTILIZAR FOR
    

    function A() {
        const numero=[1,2,3,4,5,6,7,8,9,10];
    const tabla=[];
    for (let index = 0; index < numero.length; index++) {
        var numeronuevo=numero[index]*2;
        tabla.push(numeronuevo);
    }
    console.log('----EJERCICIO FOR----')
    console.log('antes: '+numero);
    console.log('despues:'+tabla);
    console.log('--------------------')
    
    }


function B() {
    const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];
const nombreMayusculas = [];

nombres.forEach((mayuscula) =>{
nombreMayusculas.push(mayuscula.toLocaleUpperCase());
})
console.log('----EJERCICIO FOR EACH----')
console.log('antes: '+nombres);
console.log('despues:'+nombreMayusculas);
console.log('--------------------')

}


function D() {
    const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];
console.log('----EJERCICIO FILTER----');
nombres.filter((nombres) => nombres==='paty'); 
console.log(nombres);   //PAR O IM
}

function E() {
    const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];
const nombreminusculas = nombres.map(nombre)
console.log('----EJERCICIO REDUCE----');
console.log('antes: '+nombres);
console.log('despues:'+nombreMayusculas);
console.log('--------------------')
    //PAR O IM
}
