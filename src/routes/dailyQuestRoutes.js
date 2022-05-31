import { Router } from 'express';
import * as DailyQuest from '../controllers/dailyQuest_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our quest router!' });
});

// Get all DailyQuests
router.get('/all', async (req, res) => {
  try {
    const result = await DailyQuest.getQuests();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Create new DailyQuest
router.post('/new', async (req, res) => {
  try {
    const result = await DailyQuest.createQuest(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get Quest
router.get('/:id', async (req, res) => {
  try {
    const result = await DailyQuest.getQuest(req.params.id);

    res.json(result);
  } catch (error) {
    res.status(404).json({ error });
  }
});

export default router;
