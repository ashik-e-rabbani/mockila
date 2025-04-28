const express = require('express');
const stubRoutes = require('./routes/stubRoute')
const SERVER_PORT= 9090;
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Mount routers
app.use('/api', stubRoutes);


//Used just an arrow function
app.listen(SERVER_PORT, (request,response)=>{

console.log(`Mockila is running on localhost:${SERVER_PORT}`);

});