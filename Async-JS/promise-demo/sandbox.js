// XMLHttpRequest obj to call API Example -->

// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', () => {
//     console.log(request, request.readyState);
//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// request.send();



// XMLHttpRequest and Promise Example -->

// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.open('GET', resource);
//         request.addEventListener('readystatechange', () => {
//           if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             resolve(data);
//           }else if (request.readyState === 4) {
//             reject(request.response);
//           }
//         });
//         request.send();
//     });
//   };
  
//   getTodos('jsons/first.json').then(data => {
//     console.log('promise 1 resolved:', data);
//     return getTodos('jsons/second.json');
//   }).then(data => {
//     console.log('promise 2 resolved:', data);
//     return getTodos('jsons/third.json');
//   }).then(data => {
//     console.log('promise 3 resolved:', data);
//   }).catch(err => {
//     console.log('promise rejected:', err);
//   });
  


// fetch API and promise Example -->

// fetch('jsons/first.json').then(response => {
//   console.log(response);
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });


// async and await with fetch and promise Example -->
const getTodos = async () => {                       // run current func in async mode without blocking current execution and return promise
  const response = await fetch('jsons/first.json');   // await return promise and wait for current statement to complete
  if(response.status !== 200){
    throw new Error("this is custom error");          // this will make this asyc to reject and the err will be caugth in catch block
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then(data => console.log(data))         // getTodos is returning promise therefore we need to add then() in order to wait for promise to resolve
  .catch(err => console.log(err));

