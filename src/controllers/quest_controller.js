import Quest from '../models/quest_model';

// Create a quest
export async function createQuest(questFields) {
  const newQuest = new Quest();
  newQuest.title = questFields.title;
  newQuest.detail = questFields.detail;
  newQuest.photoUrl = questFields.photoUrl;
  try {
    const savedQuest = await newQuest.save();
    return savedQuest;
  } catch (error) {
    console.log(error);
    throw new Error(`create quest error: ${error}`);
  }
}

// Get all quests
export async function getQuests() {
  // await finding quests
  try {
    const quests = await Quest.find({}).sort([['date', -1]]);
    return quests;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
}

// Get a quest by ID
export async function getQuest(id) {
  try {
    const quest = await Quest.findById(id);
    return quest;
  } catch (error) {
    throw new Error(`get quest error: ${error}`);
  }
}
