// make a server called app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));

// variable set up
let history = [];
let answer;

// this send the history array to the client
app.get('/history', (req, res) => {
    res.send(history);
})



















// tell the server to listen for connections
app.listen(PORT, () => {
    console.log( 'RUNNING ON PORT', PORT )
})