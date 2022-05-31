import Item from '../models/item_model';

// Get all quests
// eslint-disable-next-line import/prefer-default-export
export async function getItems() {
  // await finding quests
  try {
    const quests = await Item.find({}).sort([['date', -1]]);
    return quests;
  } catch (error) {
    throw new Error(`get posts error: ${error}`);
  }
}

export async function createItem(itemFields) {
  const newItem = new Item();
  newItem.name = itemFields.name;
  newItem.effect = itemFields.effect;
  newItem.description = itemFields.description;

  try {
    const savedItem = await newItem.save();
    return savedItem;
  } catch (error) {
    console.log(error);
    throw new Error(`create quest error: ${error}`);
  }
}
