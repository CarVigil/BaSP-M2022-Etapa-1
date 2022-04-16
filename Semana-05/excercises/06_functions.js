/***********************
 * Funciones
 *  a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
 *  el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
 *  b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
 *  mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
 *  c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número
 *  entero.
 *  d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso
 *  que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
 *  e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
 *  que todo siga funcionando igual.
 ************************/
// ejercicio a
function suma(num1, num2) {
    return num1 + num2;
}
var resultado = suma(5,23);
console.log('\n-Exercise 6.a:');
console.log(resultado);

// ejercicio b
function suma1(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        window.alert('At least one of the parameters has an error');
        return NaN;
    } else {
        return num1 + num2;
    }
}
var resultado1 = suma1('abc',23);
console.log('\n-Exercise 6.b:');
console.log(resultado1);

// ejercicio c
function validateInteger(num) {
    return Number.isInteger(num);
}
console.log('\n-Exercise 6.c:');
console.log(validateInteger(5));

// ejercicio d
function suma2(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        window.alert('At least one of the parameters has an error');
        return NaN;
    } else {
        if (Number.isInteger(num1) && Number.isInteger(num2)) {
            return num1 + num2;
        } else {
            window.alert('At least one of the parameters is a float');
            if(!Number.isInteger(num1)){
                return Math.round(num1)
            } else {
                if (!Number.isInteger(num2)){
                    return Math.round(num2)
                }
            }
        }
    }
}
console.log('\n-Exercise 6.d:');
console.log(suma2(5, 3.2));

// ejercicio e
function validate(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } else {
        window.alert('At least one of the parameters is a float');
        if(!Number.isInteger(a)){
            return Math.round(a)
        } else {
            if (!Number.isInteger(b)){
                return Math.round(b)
            }
        }
    }
}
function suma3(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        window.alert('At least one of the parameters has an error');
        return NaN;
    } else {
        return validate(num1, num2);
    }
}
console.log('\n-Exercise 6.e:');
console.log(suma3(105, 503));