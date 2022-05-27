import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const DailyQuestSchema = new Schema({
  task: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// create PostModel class from schema
const DailyQuestModel = mongoose.model('DailyQuest', DailyQuestSchema);

export default DailyQuestModel;
