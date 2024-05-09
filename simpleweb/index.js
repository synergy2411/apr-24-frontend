const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send({ message: "SUCCESS" });
});

app.listen(8080, () => console.log("Server started at PORT : 8080"));
