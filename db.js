const mongoose = require('mongoose');

const MONGO_URL =
  process.env.MONGO_URL || 'mongodb://localhost:27017/yelp-camp';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

module.exports = db;
