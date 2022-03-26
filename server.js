const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use("/student", require("./routes/student"));
app.listen(4000, (error) => {
  error ? console.log(error) : console.log("serveur mrigel");
});
