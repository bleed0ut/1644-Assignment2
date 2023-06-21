const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Toy = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 666 },
    image: { type: String, maxLength: 255, required: true },
    price: { type: Number, min: 1, index: true },
    slug: { type: String, slug: 'name'},
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Toy', Toy);
