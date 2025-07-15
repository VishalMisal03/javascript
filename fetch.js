// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((response) =>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((value2) =>{
//     console.log(value2)
// })

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "This is a test post",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Posted Data:", data);
  });
