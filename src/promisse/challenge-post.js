import fetch from 'node-fetch';
const API = 'https://appi.escuelajs.co/api/v1';

function postData (urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'sema-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "New Product Course",
    "price": 999,
    "description": "A descriiption",
    "categoryId": 1,
    "image": [
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));
    