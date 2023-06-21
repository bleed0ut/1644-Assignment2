const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://khanh:khanh@cluster0.rc813o2.mongodb.net/mytoys', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect successfully!');
  } catch (error) {
    console.log('Connect failure!');
  }
}

module.exports = { connect };
