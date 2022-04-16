/***********************
 * For
 *  a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
 *  mostrar una alerta utilizando cada una de las palabras.
 *  b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada
 *  palabra modificada.
 *  c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo
 *  con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única
 *  alerta con la cadena completa.
 *  d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
 *  es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número
 *  0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
 * ***********************/
// ejercicio a
var verbos = ['nadar', 'correr', 'jugar', 'comer', 'programar'];
for (var i = 0; i < verbos.length; i++) {
    window.alert(i+1 +': ' +verbos[i]);
}

// ejercicio b
for (var i = 0; i < verbos.length; i++) {
    window.alert(i+1 +': ' +verbos[i].substring(0,1).toUpperCase()+verbos[i].substring(1));
}
// ejercicio c
var sentence = '';
for (var i = 0; i < verbos.length; i++) {
    sentence += verbos[i]+' ';
}
window.alert(sentence);

// ejercicio d
var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros[i] = i;
}
console.log('\n-Exercise 5.d:');
console.log(numeros);