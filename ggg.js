const fetch = require('node-fetch');
fetch('http://localhost:2000/books').then((res) => res.json()).then(({data}) => console.log(data));
