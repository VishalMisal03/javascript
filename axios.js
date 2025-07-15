axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    console.log("User Name:", response.data.name);
  })
  .catch(error => {
    console.log("Error:", error);
  });
