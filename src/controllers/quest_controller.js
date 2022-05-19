import Quest from '../models/quest';

export async function createQuest(postFields) {
  const newQuest = new Quest();
  newPost.title = postFields.title;
  newPost.detail = postFields.detail;
  newPost.photoUrl = postFields.photoUrl;
  // await creating a quest
  // return post
  try {
    const savedQuest = await newQuest.save();
    return savedpost;
  } catch (error) {
    console.log(error);
    throw new Error(`create quest error: ${error}`);
  }
}
export async function getQuests() {
  // await finding quests
  try {
    const quests = await quests.find();
    return posts;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }

  // return posts
}
export async function getPost(id) {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
}
export async function deleteQuest(id) {
  try {
    const quest = await Quest.findByIdAndDelete(id);
    return post;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
}
export async function updateQuest(id, postFields) {
  try {
    await Quest.findByIdAndUpdate(id, postFields);
    const quest = await Quest.findById(id);
    return quest;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
}
