const express = require('express');
const cors = require('cors');

const eventsRoute = require('./routes/eventsRoute');
const categoriesRoute = require ('./routes/categoriesRoute')

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', eventsRoute);
app.use('/categories', categoriesRoute);

app.listen(8080, () => {
    console.log('the server is running!')
})