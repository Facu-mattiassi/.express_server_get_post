const express = require('express');
const app = express(); 

app.use(express.json());

/* cuando entre o visite la aplicacion, llevar  a cabo una funcion
la cual va despues de la coma (,)*/
app.get('/user', (req, res) => {
    res.json({
        username:'Cameron',
        lastmane:'Howe'
    });
});

app.post('/user:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Post Request Received');
})

app.put('/contact', (req, res) => {
    res.send('update r R');
})

app.delete('/test', (req, res) => {
    res.send('<h1>delete rescuet RR</h1>');
})

//se le indica al server que muestre el mensaje en el localhost:5000
app.listen(5000, ()=> {
    console.log('Server en puerto 5000');
})

