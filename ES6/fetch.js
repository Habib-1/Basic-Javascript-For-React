// fetch data from a URL
// and log the response to the console

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json( )) // parse the JSON from the response
    .then(data=>console.log(data)) // log the data to the console



