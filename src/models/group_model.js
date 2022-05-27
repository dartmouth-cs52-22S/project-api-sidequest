import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  admin: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,

}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const GroupModel = mongoose.model('Group', GroupSchema);

export default GroupModel;
