/***********************
* Arrays
*   a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
*   "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*   b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*   c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*   d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*   e. Invertir el orden del array (utilizar reverse).
*   f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*   g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
***********************/
// ejercicio a
var meses = ['Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'];
console.log('\n-Exercise 3.a:');
console.log(meses[4]+', '+meses[10]);

// ejercicio b
var ordenMeses = ['Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'];
console.log('\n-Exercise 3.b:');
console.log(ordenMeses.sort());

// ejercicio c
meses.unshift('Meses');
meses.push('Año 2022');
console.log('\n-Exercise 3.c:');
console.log(meses);

// ejercicio d
meses.shift();
meses.pop();
console.log('\n-Exercise 3.d:');
console.log(meses);

// ejercicio e
var invertirMeses = ['Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'];
console.log('\n-Exercise 3.e:');
console.log(invertirMeses.reverse());

// ejercicio f
console.log('\n-Exercise 3.f:');
console.log(meses.join(' - '));

// ejercicio g
var copiaMeses = meses.slice(4,11);
console.log('\n-Exercise 3.g:');
console.log(copiaMeses);
