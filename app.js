const express = require('express');
const path = require('path');
const app = express();
const port = 2000;
app.set('views',path.join(__dirname, 'views'))
app.use('/static', express.static('static'));
app.use(express.urlencoded());


app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'));
  });
app.get('/services', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/services.html'));
  });

app.get('/about', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/about.html'));
  });


app.listen(port, ()=>{
    console.log(`The app started on port ${port}`);
});