const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('it is working!')
})

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: 'a8a8d48b',
  application_key: '1249e3696d2279ea9f379f346429f99b'
});

app.post('/text', (req, res) => {
    textapi.entities({
    text: req.body.input
  }, function(error, response) {
    if (error === null) {
      res.json(response);
    } else {
      res.status(400).json('error working with api')
    }
  });
})

app.listen(3001, () => {
  console.log('app is running on port 3001');
})
