const express = require('express');
const cors = require('cors');
const fs = require('fs')

const eventsRoute = require('./routes/eventsRoute');
const categoriesRoute = require ('./routes/categoriesRoute');
const eventsData = require('./data/events.json')

// const data = fs.readFileSync('./data/test1.json')
// const eventData = JSON.parse(data)
// console.log(eventData)

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.json(eventsData);
  });

app.put('/', (req,res) => {

    const {id} = req.body;
    const filteredEventsData = eventsData.filter(item => item.id == id)

    const changeData = (index) => {
        if (!filteredEventsData || filteredEventsData.length === 0) {
            res.json({ success: false });
        } else {
            let foundItem = filteredEventsData.pop();
            console.log(foundItem);
            foundItem.favourite = !foundItem.favourite;
            eventsData.splice(index, 1, foundItem);
            fs.writeFileSync('./data/events.json', JSON.stringify(eventsData, null, 2));
            res.json(eventsData);
        }
    }

    const indexValue = eventsData.find(function(element, index) {
        if (element.id === id) {
            changeData(index);
            return true;
        } else {
            return false;
        }
    })
    // console.log(index)
    
    
}) 

app.use('/categories', categoriesRoute);

app.listen(8080, () => {
    console.log('the server is running!')
})