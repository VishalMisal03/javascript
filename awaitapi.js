// async function getData() {
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }


// async function getData() {
//     let x = await fetch("https://randomuser.me/api/")
//     let data = await x.json()
//     console.log(data)
// }

// async function main() {
//     console.log("loading moduls")

//     console.log("Do something else ")

//     console.log("Load data")

//     let data = getData()
//     console.log(data)
//     console.log("process data")
// }


fetch("https://jsonplaceholder.typicode.com/users/1", {
  method : "GET"
})
  .then(response => response.json())
  .then(data => {
    console.log("User Name:", data.name);
    console.log("Email:", data.email);
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });
