const db = require('../db');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seed = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const idx = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      location: `${cities[idx].city}, ${cities[idx].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    });
    await camp.save();
  }
};

seed().then(() => db.close());
