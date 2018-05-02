const express = require("express");
const app = express();

const port = (process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});


//middleware
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

module.exports = app;
