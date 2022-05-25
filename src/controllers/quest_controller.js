import Quest from '../models/quest_model';

// Create a quest
export async function createQuest(questFields) {
  const newQuest = new Quest();
  newQuest.title = questFields.title;
  newQuest.detail = questFields.detail;
  newQuest.photoUrl = questFields.photoUrl;
  // await creating a quest
  // return post
  try {
    const savedQuest = await newQuest.save();
    return savedQuest;
  } catch (error) {
    console.log(error);
    throw new Error(`create quest error: ${error}`);
  }
}

// Get all quests    ************WHEN WOUDL WE USE THIS ??????
export async function getQuests() {
  // await finding quests
  try {
    const quests = await Quest.find();
    return quests;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
}

// Get a quest by ID - WHEN WOULD WE USE THIS? for random draw?
export async function getQuest(id) {
  try {
    const quest = await Quest.findById(id);
    return quest;
  } catch (error) {
    throw new Error(`get quest error: ${error}`);
  }
}

// DELETING A QUEST  ****WHEN WOULD WE USE THIS
export async function deleteQuest(id) {
  try {
    const quest = await Quest.findByIdAndDelete(id);
    return quest;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
}

// UPDATING A QUEST- WHEN WOULD WE USE THIS? DO WE NEED THIS
export async function updateQuest(id, questFields) {
  try {
    await Quest.findByIdAndUpdate(id, questFields);
    const quest = await Quest.findById(id);
    return quest;
  } catch (error) {
    throw new Error(`get post error: ${error}`);
  }
}
