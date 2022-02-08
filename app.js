const express = require("express");
 const hostname = '127.0.0.1'
const app = express();
const dotenv = require('dotenv')
const routes = require("./routes/index");
const connectDB = require('./config/db')
dotenv.config('.env')
connectDB();

// parse request of content typle - application/json
app.use(express.json());

// static files
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}));

app.use('/api/students', routes);

app.get('/home', (req, res) => {
    res.render('index')
})

app.get('/registration', (req, res) =>{
    res.render('registration');
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 8080;
app.listen(PORT, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${PORT}/`);
})