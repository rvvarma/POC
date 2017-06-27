var express = require('express')
var request = require('request');
var bodyParser = require('body-parser');

var app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// get list of contacts from a company
app.get('/contacts', function(req, res) {
  var options = { headers: {
                    'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo='
                  },
                  url: "http://localhost:8080/AccountRight/bfd50c9e-ef34-4823-81a7-17b068f965df/Contact/Customer/?format=json"
                }
  request.get(options, function(error, response, body) {
    res.set('Content-Type', 'Application/json');
    if (!error && response.statusCode == 200) {
        console.log("success response from Myob: "+body);
        res.status(response.statusCode).send(body);
    } else {
      console.log("failure response from Myob: "+body);
      res.status(response.statusCode).send(body);
    }
  });
})

// get one contact from a company
app.get('/contacts/:id', function(req, res) {
  var id = req.params.id;
  console.log("Request param id: "+id);
  var options = { headers: {
                    'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo='
                  },
                  url: "http://localhost:8080/AccountRight/bfd50c9e-ef34-4823-81a7-17b068f965df/Customer/"+id+"/?format=json"
                }
  request.get(options, function(error, response, body) {
    res.set('Content-Type', 'Application/json');
    if (!error && response.statusCode == 200) {
        console.log("success response from Myob: "+body);
        res.status(response.statusCode).send(body);
    } else {
      console.log("failure response from Myob: "+body);
      res.status(response.statusCode).send(body);
    }
  });
})

// Create contact
app.post('/contacts/new', function(req, res) {
  var requestBody = JSON.stringify(req.body);
  console.log("Request body: "+requestBody);
  var options = { headers: {
                    'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo='
                  },
                  url: "http://localhost:8080/AccountRight/bfd50c9e-ef34-4823-81a7-17b068f965df/Contact/Customer/?format=json",
                  body: requestBody
                }
  request.post(options, function(error, response, body) {
    res.set('Content-Type', 'Application/json');
    if (!error && response.statusCode == 201) {
        console.log("success response from Myob: "+body);
        res.status(response.statusCode).send(body);
    } else {
      console.log("failure response from Myob: "+body);
      res.status(response.statusCode).send(body);
    }
  });
})

// Delete one contact from a company
app.delete('/contacts/:id', function(req, res) {
  var id = req.params.id;
  console.log("Request param id: "+id);
  var options = { headers: {
                    'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo='
                  },
                  url: "http://localhost:8080/AccountRight/bfd50c9e-ef34-4823-81a7-17b068f965df/Customer/"+id+"/?format=json"
                }
  request.delete(options, function(error, response, body) {
    res.set('Content-Type', 'Application/json');
    if (!error && response.statusCode == 200) {
        console.log("success response from Myob: "+body);
        res.status(response.statusCode).send(body);
    } else {
      console.log("failure response from Myob: "+body);
      res.status(response.statusCode).send(body);
    }
  });
})

app.listen(3000)
