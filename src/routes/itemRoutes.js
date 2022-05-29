import { Router } from 'express';
import * as Item from '../controllers/item_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our items router!' });
});

// Get all quests
router.get('/all', async (req, res) => {
  try {
    const result = await Item.getItems();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/newItem', async (req, res) => {
  try {
    const result = await Item.createItem(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});
export default router;
