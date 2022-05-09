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
 principales (al menos 2); duración y género; Imprime los datos de la peli  en el html accediendo. 

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
}*/

//EJERCICIO 2
/*Película Favorita II: Al  objeto de la actividad anterior agrega las propiedades País de origen; 
idioma de origen y la condición si es apta para todo público (ATP). Además agrega una 
función que muestre los datos del objeto. Llama a esa función. Por último elimina la propiedad sobre el género usando delete. 

class Pelis {
    constructor(nombre, año, director, actuan, duración, genero, pais, atp){
        this.nombre=nombre;
        this.año= año;
        this.director= director;
        this.actuan= actuan;
        this.duración= duración;
        this.genero= genero;
        this.pais= pais;
        this.atp= atp;          
    }
    mostrarPelis(){
        document.write(this.nombre+ "<br>" + this.año+ "<br>" + this.director+ "<br>" + this.actuan+ "<br>" +this.duración+ "<br>" +this.genero+ "<br>" +this.pais+ "<br>" +this.atp+ "<br>");
    } 
} 



var Peli1 = new Pelis ("el secreto de sus ojos","2007","Campanella","Soledad Villamil, Darín", "120min", "policial", "argentina", "ATP");
var Peli2 = new Pelis ("el secreto de sus ojos","2007","Campanella","Soledad Villamil, Darín", "120min", "policial", "argentina", "ATP");
var Peli3 = new Pelis ("el secreto de sus ojos","2007","Campanella","Soledad Villamil, Darín", "120min", "policial", "argentina", "ATP");
var Peli4 = new Pelis ("el secreto de sus ojos","2007","Campanella","Soledad Villamil, Darín", "120min", "policial", "argentina", "ATP");

Peli1.mostrarPelis()
Peli2.mostrarPelis()
Peli3.mostrarPelis()
Peli4.mostrarPelis()*/


//EJERCICIO 3
/*Calculadora científica: Realiza una calculadora que permita calcular, además de las operaciones básicas, 
la raíz cuadrada de un número, el logaritmo en base 10 de ese número y la potencia de un número dado su exponente. (usar el objeto Math()). 

    
        function sumar(){
            var x=parseInt (document.getElementById('valor1').value);
            var y=parseInt (document.getElementById('valor2').value);
            document.getElementById('resultado').innerHTML=(x+y);   
        }
        function restar(){
            var x=parseInt (document.getElementById('valor1').value);
            var y=parseInt (document.getElementById('valor2').value);
            document.getElementById('resultado').innerHTML=(x-y);   
        }
        function multiplicar(){
            var x=parseInt (document.getElementById('valor1').value);
            var y=parseInt (document.getElementById('valor2').value);
            document.getElementById('resultado').innerHTML=(x*y);   
        }
        function dividir(){
            var x=parseInt (document.getElementById('valor1').value);
            var y=parseInt (document.getElementById('valor2').value);
            document.getElementById('resultado').innerHTML=(x/y);   
        }

        function raiz() {
            var x=parseInt (document.getElementById('valor1').value);
            document.getElementById('resultado').innerHTML=(Math.sqrt(x))
        }

        function log(){
            var x=parseInt (document.getElementById('valor1').value);
            document.getElementById('resultado').innerHTML=(Math.log10(x));   
        }

        function potencia(){
            var x=parseInt (document.getElementById('valor1').value);
            var y=parseInt (document.getElementById('valor2').value);
            document.getElementById('resultado').innerHTML=(Math.pow(x,y));   
        }*/



//EJERCICIO 4 
/*En qué mes estamos?: A través de un prompt ingresar el número de un mes e imprimir el nombre del mes correspondiente (deberás usar arrays.) 

let mes=parseInt(prompt ("ingresa un número"));
var arrayMes = ["Enero", "Febrero","Marzo","Abril","Mayo ", "Junio", "julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
switch (mes) {
    case 1: document.write(arrayMes[0]);
    break;
    case 2: document.write(arrayMes[1]);
    break;
    case 3: document.write(arrayMes[2]);
    break;
    case 4: document.write(arrayMes[3]);
    break;
    case 5: document.write(arrayMes[4]);
    break;
    case 6: document.write(arrayMes[5]);
    break;
    case 7: document.write(arrayMes[6]);
    break;
    case 8: document.write(arrayMes[7]);
    break;
    case 9: ddocument.write(arrayMes[8]);
    break;
    case 10: document.write(arrayMes[9]);
    break;
    case 11: document.write(arrayMes[10]);
    break;
    case 12: document.write(arrayMes[11]);
    break;
    default: document.write("meh")
}
*/
//EJERCICIO 5
/*Estudiantes de Matea: Crear un array de objetos que contenga al menos 5 estudiantes del grupo. Cada estudiante debe poseer 
las propiedades de: nombre; edad; género musical; mascotas;  
y un objeto “gustos” que contenga al menos dos propiedades (el objeto gustos debe estar dentro del objeto principal).
 Se deberá imprimir los datos de cada alumno. 


let Estudiantes = [
    {Nombre :`Victor`,Edad : `18 años`,GéneroMusical : `Pop alternativo`,Mascotas : `8 gatos`, Gustos : [`Menta granizada`, `Naruto`]},
    {Nombre :`Nahuel`,Edad : `19 años`,GéneroMusical : `Pop alternativo`,Mascotas : `8 gatos`, Gustos : [`Menta granizada`, `Naruto`]},
    {Nombre :`Franco`,Edad : `22 años`,GéneroMusical : `Pop alternativo`,Mascotas : `8 gatos`, Gustos : [`Menta granizada`, `Naruto`]},
    {Nombre :`Pablo`,Edad : `22 años`,GéneroMusical : `Pop alternativo`,Mascotas : `8 gatos`, Gustos : [`Menta granizada`, `Naruto`]},
    {Nombre :`Tamara`,Edad : `21 años`,GéneroMusical : `Pop alternativo`,Mascotas : `8 gatos`, Gustos : [`Menta granizada`, `Naruto`]},
]

for(let i= 0; i<Estudiantes.length; i++) {
    var estudiante = Estudiantes[i];
    document.write ("Nombre: " + "<b>" + estudiante.Nombre + "</b>" + ", edad: "+ estudiante.edad + ", Género Musical: " + estudiante.GéneroMusical + "<br>")
*/

//EJERCICIO 6
/*Comentarios: Deberás  imprimir en el html los  comentarios de los usuarios que son ingresados
 a través de un prompt. Deberán aparecer al menos 5 comentarios. Cada comentario deberá ser impreso junto con la fecha del día de la creación.
 */

//EJERCICIO 7
//Películas favoritas III: Escribir un array de objetos de al menos 5 películas que contenga como propiedades las pedidas en el ejercicio.
