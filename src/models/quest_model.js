import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const QuestSchema = new Schema({
  title: String,
  detail: String,
  photoUrl: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// create PostModel class from schema
const QuestModel = mongoose.model('Post', QuestSchema);

export default QuestModel;
