const express = require('express');
const router = express.Router();
const fs = require('fs')
const eventsData = require('../data/events.json');
const testData = require('../data/test1.json')

// categories---- Outdoor, Indoor, Music, Sports, Food, Games, Film, Arts, Dance, Culture, Social, Business,

// const words = fs.readFileSync('./../data/test1.json')
// console.log(words)


router.get('/', (req, res) => {
    res.json(eventsData);
  });

  router.put('/', (req,res) => {
    const {id} = req.body
    const index = eventsData.indexOf(id) 
    const data = eventsData.filter(item => item.id === id)
    
    if (data.favourite === true) {
      data.favourite = false
      
    }
    else {
      data.favourite = true
    }
    const newData = eventsData.splice(index, 1, data)
    res.json(newData)
    // fs.writeFileSync('../data/test.json', JSON.stringify(newData))
    // console.log(data)
    // console.log(index)
    // console.log(id)
  })

  module.exports = router;