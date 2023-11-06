const mongoose = require('mongoose');

const pathSchema = new mongoose.Schema({
  startPoint: {
    lat: Number,
    lng: Number,
  },
  endPoint: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model('Path', pathSchema);
