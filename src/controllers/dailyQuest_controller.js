import DailyQuest from '../models/dailyQuest_model';

// Get all quests
// eslint-disable-next-line import/prefer-default-export
export async function getQuests() {
  // await finding quests
  try {
    const quests = await DailyQuest.find({}).sort([['date', -1]]);
    return quests;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
}

export async function getQuest(id) {
  try {
    const returnQuest = await DailyQuest.findById(id);
    return returnQuest;
  } catch (error) {
    throw new Error(`Get daily quest error: ${error}`);
  }
}
export async function createQuest(dQuestFields) {
  const newQuest = new DailyQuest();
  newQuest.task = dQuestFields.task;
  try {
    const savedQuest = await newQuest.save();
    return savedQuest;
  } catch (error) {
    console.log(error);
    throw new Error(`create quest error: ${error}`);
  }
}
