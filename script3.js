let  arreglo_num = [];
for (let i = 0; i < 10; i++) {
    let numeros  = parseInt(prompt('Ingrese un numero'));
     arreglo_num.push(numeros);
     
}
let max = Math.max.apply(Math, arreglo_num);
let min = Math.min.apply(Math, arreglo_num);
let sum = arreglo_num.reduce((previous, current)=> current += previous);
let promedio = sum / arreglo_num.length;
arreglo_num.sort((a, b) => a - b);
let median = (arreglo_num[(arreglo_num.length - 1) >> 1] + arreglo_num[arreglo_num.length >> 1]) / 2

console.log(max);
console.log(min);
console.log(promedio);
console.log(median);
console.log('Arreglo:',arreglo_num);






