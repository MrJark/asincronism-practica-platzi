//hemos instalado en la terminal el fetch para así poder llamarlo desde aquí, lo hemos intalado mediante la terminal como; npm i node-fetch

import { error } from 'console';
import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v1';

function fetchData (urlApi) {
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then (products => {
//     console.log(products);
// })
// .then(() => {
//     console.log('hola para comprobar');
// })
// .catch(error => console.log(error));

//comentamos lo anteror para no tener problemas

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)//aquí queiro mostrar los productos que tengo
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then (response => response.json())
    .then(product => {
        console.log(product.title)//aquí muestro el título del producto que voy a llamar
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);//aquí llamos al nombre de la categoria y así es como se estructuran los llamados, la lógica es in llamando de general a lo particular
    })
    .catch(err => console.log(err))//se pone el .catch para mostrar si hay errores y que nos lo muestre en pantalla y cual es
    .finally(() => console.log('Finally'));//se pone de una manera no obigatoria para saber que hemos acabado las llamadas