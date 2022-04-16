/***********************
* Variables y Operadores
*  a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
*  suma de ambos números en una 3er variable.
*  b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
*  variable.
*  c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras)
************************/
// ejercicio a
var num1 = 5;
var num2 = 3;
var suma = num1 + num2;
console.log('\n-Exercise 1.a:');
console.log(suma);

// ejercicio b
var cad1 = 'Hola ';
var cad2 = 'Mundo';
var concat = cad1 + cad2;
console.log('\n-Exercise 1.b:');
console.log(concat);

// ejercicio c
var cad3 = 'Como';
var cad4 = 'estas';
var sumaLetras = cad3.length + cad4.length;
console.log('\n-Exercise 1.c:');
console.log(sumaLetras);