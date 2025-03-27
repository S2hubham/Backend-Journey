const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/invalid-url"
];

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  .then(console.log)
  .catch((err)=>{console.log("error", err)});
