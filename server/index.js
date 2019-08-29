const express = require('express');
const cors = require('cors');

const eventsRoute = require('./routes/eventsRoute');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', eventsRoute)

app.listen(8080, () => {
    console.log('the server is running!')
})