const express = require('express');
const router = express.Router();
const Point = require('../models/points');

// Create a new point
router.post('/points', async (req, res) => {
  try {
    const { lat, lng } = req.body;
    const newPoint = new Point({ lat, lng });
    await newPoint.save();
    res.json(newPoint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating point' });
  }
});

// Retrieve a list of points
router.get('/points', async (req, res) => {
  try {
    const points = await Point.find();
    res.json(points);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving points' });
  }
});

// Additional routes for updating and deleting points can be defined here.

module.exports = router;
