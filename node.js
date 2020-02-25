const express = require('express');
const cors = require('cors');

// I created this simple express server to do local
// tests since jsonplaceholder takes too long to respond
const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('Received a GET HTTP method'));

app.post('/posts', (req, res) => res.sendStatus(200));


app.listen(5000, () => {
  console.log('Server running on port 5000');
});
