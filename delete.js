
//delete method
  fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE"
})
  .then(response => {
    if (response.ok) {
      console.log("User deleted successfully.");
    } else {
      console.log("Failed to delete user.");
    }
  })
  .catch(error => {
    console.error("Error while deleting user:", error);
  });
