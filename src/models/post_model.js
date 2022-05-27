import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  description: String,
  photoUrl: String,
  likes: Number,
  quest: { type: Schema.Types.ObjectId, ref: 'Quest' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },

}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
