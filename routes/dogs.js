const express = require('express');
const router = express.Router();

const Dogs = require('../models/Dogs');

// GET api/dogs
// Get all dogs
router.get('/', async (req, res) => {
  try {
    const dogs = await Dogs.find({dog: req.dog}).sort({
      date: -1,
    });
    res.json(dogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//POST api/dogs
//Add new dogs
router.post('/',async (req, res) => {

    const {dogimg, name, date} = req.body;
    try {
      const newDog = new Dogs({
        dogimg, 
        name,
        date, 
        dog: req.dog,
      });

      const dog = await newDog.save();
      res.json(dog);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

module.exports = router;