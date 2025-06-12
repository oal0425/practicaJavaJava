//Dado un array de numeros , genera un nuevo array con el cuadrado de los numeros

const numeros = [1,2,3,4,5];
const numCuadrados = numeros.map((num) => num*num);
const cuadrados = numeros.map((num) => Math.pow(num,2));

console.log(numCuadrados);
console.log(cuadrados);

console.log("---------------------------------------------------------------------------------------------------")

//Dado un array de nombres, agregar un prefijo al inicio de cada nombre

const nombres = ["Ana", "Pedro", "Luis"];
const nombresPrefijados = nombres.map((name) => "Sr(a) " + name);

console.log(nombresPrefijados);

console.log("---------------------------------------------------------------------------------------------------")

//Ejercicio3: Convertir temperaturas

const funcionTemperatura = (grados) => grados * 1.8 + 32;

const funTemp = (grados) => {
    return grados * 1.8 + 32;
}

const temperaturaC = [0, 20, 30, 40 , 50];

const temperaturaCelcius = temperaturaC.map(gradosCelcius => funTemp(gradosCelcius));

console.log(temperaturaCelcius);



console.log("---------------------------------------------------------------------------------------------------")
//Ejercicio 4: dado un array de objectos, devolve un array que contenga solo los nombres

const personas = [
    {
        nombre: 'Carlos',
        edad: 25
    },
    {
        nombre: 'Luis',
        edad: 30
    },
    {
        nombre: 'Ana',
        edad: 20
    },
    {
        nombre: 'Pedro',
        edad: 35
    }
];

const nombresPersonas = personas.map((persona)=> persona.nombre);

console.log(nombresPersonas);


console.log("---------------------------------------------------------------------------------------------------")
//Dado un array de strings, devolver un nuevo array con todas las palabras en mayusculas

const palabras = ['hola', 'mundo', 'JavaScript'];

const palabrasMayus = palabras.map(palabra => palabra.toUpperCase());

console.log(palabrasMayus);

























