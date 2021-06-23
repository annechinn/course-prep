const express = require('express');
const router = express.Router();
const zoo = require('../data/zoo');

// GET all
router.get('/', (req, res)=>{
    res.json(zoo.animals);
  });

// GET single member by id
router.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const animal = zoo.animals.find(x=>x.id===id);
    if (animal) {
      res.json(animal);
    }
    else {
      res.status(400).json({msg: `no animal with id ${id}`})
    }
  });

module.exports = router;