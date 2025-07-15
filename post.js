//post method
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


