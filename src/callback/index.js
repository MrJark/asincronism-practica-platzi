

function sum (num1, num2) {
    return num1 + num2;
}

function calc (num1, num2, callback) {
    return callback(num1, num2);
}//no tienen que llamarse callback, puede ser cualqueira pero lo llamamos así por la coherencia con lo que queremos, no por otra cosa

console.log(calc(2, 2, sum));

setTimeout(function() {
    console.log('Hola, JS');
}, 2000)


function grettin (name) {
    console.log(`Hola, ${name}`);
}
setTimeout(grettin, 2000, 'Chema');