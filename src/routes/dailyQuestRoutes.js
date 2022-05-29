import { Router } from 'express';
import * as DailyQuest from '../controllers/dailyQuest_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our quest router!' });
});

// Get all quests
router.get('/all', async (req, res) => {
  try {
    const result = await DailyQuest.getQuests();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/new', async (req, res) => {
  try {
    const result = await DailyQuest.createQuest(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});
export default router;
