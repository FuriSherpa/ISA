async function fetchData() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    } catch(error) {
    console.error(error);
    }

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
        resolve('Success!');
        }, 1000);
       });
       promise.then(function(value) {
        console.log(value); // Output: Success!
       }).catch(function(error) {
        console.log(error);
       });