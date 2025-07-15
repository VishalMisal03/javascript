  //put method
  fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",                     
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Vishal Misal",
    email: "vishal@example.com"
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("Updated User:", data);
  })
  .catch(error => {
    console.error("Error updating user:", error);
  });

