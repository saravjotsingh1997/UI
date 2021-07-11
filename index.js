const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')

const { planRoute } = require('./routes');

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/plans', planRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


const CONNECTION_URL = "mongodb://127.0.0.1:27017/sar";
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("App is running on port", PORT);
        })
    })
    .catch((err) => {
        console.log(err.message);
    })