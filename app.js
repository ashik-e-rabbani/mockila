const express = require('express')
const SERVER_PORT= 9090
const app = express();

app.get('/',(req,res)=>{

    res.send('Welcome to Mockila')

});

app.get('/about',(req,res)=>{

    res.send('Just a simple server for mocking APIs')

});

app.get('/stub/:id',(req,res)=>{

    const stubId = req.params.id;

    res.status(200)
    .set({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'X-Custom-Header': 'MyValue',
        'X-Powered-By':'Ashik'
      })
    .json({ id: stubId, created: true });

});

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.post('/api/add/', (req, res) => {
    if (!req.body.apiPath) {
      return res.status(400).json({
        status: 'error',
        message: 'Path is required',
        code: 'VALIDATION_ERROR'
      });
    }
    
    res.status(201)
    .set({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Custom-Header': 'MyValue',
      'X-Powered-By': 'Ashik'
    })
    .json({ message: 'Api added successfully!', created: true });
  });


//Used just an arrow function
app.listen(SERVER_PORT, (request,response)=>{

console.log(`Mockila is running on localhost:${SERVER_PORT}`);

});