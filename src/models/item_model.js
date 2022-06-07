import mongoose, { Schema } from 'mongoose';

const ItemSchema = new Schema({
  name: String,
  effect: String,
  description: String,

}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const ItemModel = mongoose.model('Item', ItemSchema);

export default ItemModel;
