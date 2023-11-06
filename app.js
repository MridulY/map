const express = require('express');
const app = express()

const port = process.env.PORT || 3000; // This line sets the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mridul3173:3173Mridul@cluster0.atgrayu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
