const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const MONGO_URI = process.env.DATABASE_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });