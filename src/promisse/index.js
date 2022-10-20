// las promesas tienen 3 estados: cumplidos, rechazados y pendientes

const promise = new Promise (function (resolve, reject) {
    resolve('Hey')
});//código de ejemplo de promesas

//el bueno

const cows = 15;

const countCows = new Promise (function(resolve, reject) {
    if (cows > 10) {
        resolve(`We have enought cows on the farm, ${cows}`);
    } else {
        reject ("There's no enought cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => { //este catch nos sirve apra capturar el error ya que si no lo ponemos no nos dirá el porqué ha fallado
    console.log(error);
}).finally(() => console.log('Finally'));//este .finally nos muestra en la consola que los cálculos se han acabado y que no hay mas código