//EJERCICIO 1
/*
 Nombres famosos: Crear un array con los 
 nombres de personajes famosos. Mediante un prompt incluir nombres al array 
 let nombres= []
 var x=prompt("ingresa otro personaje")

while (x!="") {
    nombres.push(x)
    x= prompt("ingresa otro personaje")}

for (var i=0; i < nombres.length; i++){
    document.write (`${nombres[i]} <br>`)
}  */
 
//EJERCICIO 2
/* Revertir cadena: Escribe una función que ponga en reversa una cadena usando los métodos del array. 
Recomendación: push, reverse, join, split (método de strings).

let string= ["j","o","i","n","t","h","e","a","r","m","y"];
let reversa= string.reverse();
document.write(reversa);*/


//EJERCICIO 3
/* Ordenar palabra: Escribe una función que tome una palabra, y devuelva una nueva con sus letras 
ordenadas alfabéticamente. Debes usar los métodos de arrays.

function reversa (texto) {
   texto=prompt('ingresa una palabra')
   return text.sort
}
reversa()
document.write(reversa.length)*/ //////////////////////////////////////////////////

//EJERCICIO 4
/*Números pares: Dado un array con números del 1  al 50, utiliza 
el método filter para obtener los números pares. 
Recuerda que no tienes que escribir tú mismo los 50 números… */



//EJERCICIO 5
/*Crear cadena: Dado un array con nombres, crear una única cadena separando los nombres con “.” */

//EJERCICIO 6
/* Números pares entre 0 y un máximo: Escribe una función que reciba dos parámetros numéricos y
 retorne la cantidad de números pares que hay entre esos dos números, incluyendo los parámetros.

var numero1= parseInt(prompt(`ingresa un número`))
var numero2= parseInt(prompt(`ingresa otro número`))
var i= 0
function pares(x,y){
    for (var i=x; i<=y; i++) {
        if (i %2==0) {
            document.write(i + "<br>")
        }
    }
};
pares(numero1,numero2);*/


//EJERCICIO 7
/* Mayor(edad, tope): Escribir la función Mayor  que reciba una edad y un valor tope y retorne true si 
la edad supera a ese tope. En caso contrario que retorne false.

var edad=parseInt(prompt('introduce una edad'))
var tope=parseInt(prompt('introduce un tope'))
function Mayor(x,y){
    if (x>=y) {
        alert('es mayor al tope');
    }
    else {
        alert('toy tiquito');
    }
    return (Mayor);
}
Mayor(edad,tope);*/


//EJERCICIO 8
/*Usuario y contraseña: Solicitar al usuario su nombre de usuario y contraseña
 para ingresar al sistema mediante prompts. Crear una función para validar que las credenciales
 ingresadas son válidas. (definir las credenciales válidas en constantes). 


 var usuario = prompt("ingresa tu usuario");
 var contraseña = prompt("ingresa la contraseña");
const usuariov= "abcd@gmail.com"
const contraseñav= "abcd" 
function validar(x,y) {
    if (usuariov==usuario && contraseñav==contraseña){
        alert("la sesión ha sido iniciada");
    }
        else {
            alert('el usuario o la contraseña es incorrecto');
        }
}
validar(usuario,contraseña);*/
//EJERCICIO 9
/* Pseudocódigo a javascript: Escribir el siguiente programa en pseudocódigo a código javaScript 
let n1=parseInt(prompt ('Ingrese un número'));
let n2=parseInt(prompt ('Ingrese otro número'));
    if (n1>=0&&n2>=0){
        alert(n1+n2)
    }
        else{
            alert('error')
        }*/
//EJERCICIO 10
/* Diagrama de flujo a código en javaScript: Escribir el siguiente programa 
en diagrama de flujo a código javaScript (utilizar una sola variable)
var x= parseInt(prompt('ingrese un número'));

function Sumar(a) { 
    if (a>10) { 
        a=parseInt(prompt('ingrese un número'));
        if (a>100) {
            alert("A")}
        else {
            alert("B")
        }
    }
    
    else {
        a=parseInt(prompt('ingrese un número'));
        if (a>1000) { 
            alert ("C")
        }
        else {
            alert ("D")
        }
    }
}
Sumar(x);
alert(x);

*/


//EJERCICIO 1_ OBLIGATORIOS OBJETOS
/*Película Favorita I: Crear un objeto con tu película 
favorita que tenga las propiedades: nombre de la película; año; director/a; actores
 principales (al menos 2); duración y género; Imprime los datos de la peli  en el html accediendo. */

 let Pelis = [
    {Nombre:"El secreto de sus ojos", año: 2007, director: "Juan José Campanella", actuan: "Soledad Villamil, Ricardo Darín ", duración: "120 min", genero: "Policial, drama. "},
    {Nombre: "El ultimo samurai", año: 2003,director: "Edward Zwick", actuan: "Tom cruise", duración: "120 min", genero: "Bélico,histórico "},
    {Nombre: "Tierra de osos", año: 2000, director: "Robert Walker", actuan: "Koda, Kenai, La viejita. ", duración: "120 min", genero: "Animación, aventura, drama "},
    {Nombre: "The babadook", año: 2012, director: "Jennifer Kent", actuan: "Noah wisemann, Essie Davies", duración: "120 min", genero: "Terror. "}
]

for(let i= 0; i<Pelis.length; i++) {
    var peli = Pelis[i];
    document.write ("Nombre: " + "<b>" + peli.Nombre + "</b>" + ", año: "
    + peli.año + ", Directed by: " + peli.director + "actúan: "+ peli.actuan + "Duración: " + peli.duración + "Género: " +peli.genero+ "<br>")
}


/*let losSimuladores = [
    {Nombre:"Santos", edad: 34, funcion: "planificación" },
    {Nombre: "Ravena", edad: 32,funcion: "caracterización"},
    {Nombre: "Medina", edad: 40, funcion: "investigación"},
    {Nombre: "Lamponne", edad: 36, funcion: "movilidad"},
]

for(let i= 0; i<losSimuladores.length; i++) {
    var simulador = losSimuladores[i];
    document.write ("Nombre: " + "<b>" + simulador.Nombre + "</b>" + ", edad: "+ simulador.edad + ", función: " + simulador.funcion + "<br>")
} */