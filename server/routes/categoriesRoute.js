const express = require('express');
const router = express.Router();

const categoriesData = require('../data/categories.json');

// categories---- Outdoor, Indoor, Music, Sports, Food, Games, Film, Arts, Dance, Culture, Social, Business,

router.get('/', (req, res) => {
    res.json(categoriesData);
  });

  module.exports = router;