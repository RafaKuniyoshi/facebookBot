
var express = require('express');
var app = express();

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === "testeToken") {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

app.get('/hello', function(req, res){
  res.send('works!!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
