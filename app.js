const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody q ");
});
 
module.exports.app = app;
