const axios = require("axios");

axios.get("http://localhost:8080/api/users")
  .then(res => {
    console.log("Response from Java API:", res.data);
  })
  .catch(err => {
    console.error("Error calling Java API:", err.message);
  });
