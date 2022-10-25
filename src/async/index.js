
const funAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000)//el símbolo de ? es para la primera parte de la promesa, la que damos como verdadera
        : reject(new Error('Error'));
    })
}

const anotherFun = async () => {
    const something = await funAsync();
    console.log(something);
    console.log('hello');
}

console.log('Before');
anotherFun();
console.log('After');

