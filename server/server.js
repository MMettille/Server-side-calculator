// make a server called app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));

// variable set up
let history = []; // this is the array of all the math we did
let result; // this is the result of the math we did

// this send the history array to the client
app.get('/history', (req, res) => {
    res.send(history);
})



// this is the post request from the function mathTime















// tell the server to listen for connections
app.listen(PORT, () => {
    console.log( 'RUNNING ON PORT', PORT )
})