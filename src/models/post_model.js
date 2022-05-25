import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  description: String,
  photoUrl: String,

  user: { type: Schema.Types.ObjectId, ref: 'user' },

}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;
