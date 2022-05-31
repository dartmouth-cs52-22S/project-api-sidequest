import Group from '../models/group_model';
import { getUser } from './user_controller';
// Get all groups
// eslint-disable-next-line import/prefer-default-export
export async function getGroups() {
  // await finding quests
  try {
    const quests = await Group.find({}).sort([['date', -1]]);
    return quests;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
}

export async function createGroup(questFields) {
  const newGroup = new Group();
  newGroup.name = questFields.name;
  newGroup.users = await [getUser(questFields.adminId)];
  newGroup.admin = await getUser(questFields.adminId);
  newGroup.description = questFields.description;
  try {
    const savedGroup = await newGroup.save();
    return savedGroup;
  } catch (error) {
    console.log(error);
    throw new Error(`create quest error: ${error}`);
  }
}

export async function deleteGroup(id) {
  try {
    const removeGroup = await Group.deleteOne({ _id: id });
    return removeGroup.deletedCount;
  } catch (error) {
    throw new Error(`Remove post error: ${error}`);
  }
}

export async function getGroup(id) {
  try {
    const returnGroup = await Group.findById(id);
    return returnGroup;
  } catch (error) {
    throw new Error(`Get post error: ${error}`);
  }
}

export async function updateGroup(id, postFields) {
  try {
    const update = await Group.findByIdAndUpdate(id, postFields);
    return update;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
}
