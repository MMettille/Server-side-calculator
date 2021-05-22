// make a server called app
const express = require('express');
const app = express();
const PORT = 5000;





















// tell the server to listen for connections
app.listen(PORT, () => {
    console.log( 'RUNNING ON PORT', PORT )
})