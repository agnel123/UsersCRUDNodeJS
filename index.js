const express = require('express')


const bodyParser = require('body-parser')
const app =  express()
var port = process.env.PORT || 8080;
const db = require('./queries')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request,response) => {
    response.json({info : 'Node.js, Express and Postgres API'})
})

app.get('/users',db.getAllUsers)
app.get('/users/:id',db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port,() => {
    console.log(`App running on port ${port}`)
})

module.exports = app;

