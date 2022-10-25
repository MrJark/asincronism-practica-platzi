import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFun = async (urlApi) => {
    try { //dentro de try sucede toda la lógica de nuestra app
        const products = await fetchData (`${urlApi}/products`);//con esto llamamos a todos los productos que haya en la API
        const product = await fetchData (`${urlApi}/products/${products[0].id}`);//esto me devuelve el primer producto de products
        const category = await fetchData (`${urlApi}/categories/${product.category.id}`); //esto nos trae la categoría del producto llamado anteriormente

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) { //aquí llegará todo lo que pase de la mano de reject, es decir, todos los errores
        console.error(error);
    }
}

anotherFun(API);