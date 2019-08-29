const express = require('express');
const router = express.Router();

const eventsData = require('../data/events.json');

// categories---- Outdoor, Indoor, Music, Sports, Food, Games, Film, Arts, Dance, Culture, Social, Business,

router.get('/', (req, res) => {
    res.json(eventsData);
  });

  module.exports = router;