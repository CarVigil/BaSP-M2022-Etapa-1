/***********************
* Strings
*   a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
*   (utilizar toUpperCase).
*   b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
*   5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*   c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
*   3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*   d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
*   en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
*   toUpperCase, toLowerCase y el operador +).
*   e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
*   Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*   f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
*   Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
*   palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y
*   el operador +).
***********************/
// ejercicio a
var cadena ='hola mundo!!';
console.log('\n-Exercise 2.a:')
console.log(cadena.toUpperCase());

// ejercicio b
var cadena1 = 'Si todo te da igual, estás haciendo mal las cuentas';
var subCadena = cadena1.substring(0,5);
console.log('\n-Exercise 2.b:')
console.log(subCadena);

// ejercicio c
var cadena2 = 'Cualquier momento es perfecto para aprender algo nuevo';
var subCadena = cadena2.substring(cadena2.length-3);
console.log('\n-Exercise 2.c:')
console.log(subCadena);

// ejercicio d
var cadena3 = 'cada día sabemos más y entendemos menos';
var cadena4 = cadena3[0].toUpperCase() + cadena3.substring(1);
console.log('\n-Exercise 2.d:')
console.log(cadena4);

// ejercicio e
var cadena5 = 'lo esencial es invisible a los ojos';
var pos = cadena5.indexOf(' ');
console.log('\n-Exercise 2.e:')
console.log(pos);

// ejercicio f
var cadena6 = 'eLECTROSCOPIO eLECTRÓNICO';
var esp = cadena6.indexOf(' ');
var cadena7 = cadena6[0].toUpperCase()
            +cadena6.substring(1, esp).toLowerCase()
            +''
            +cadena6[esp+=1].toUpperCase()
            +cadena6.substring(esp+=1).toLowerCase();
console.log('\n-Exercise 2.f:');
console.log(cadena7);