import { Router } from 'express';
import * as Quest from '../controllers/quest_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our quest router!' });
});

// get all quests
router.get('/all', async (req, res) => {
  try {
    const result = await Quest.getQuests();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});
// GET Quest
router.get('/:id', async (req, res) => {
  try {
    const result = await Quest.getQuest(req.params.id);

    res.json(result);
  } catch (error) {
    res.status(404).json({ error });
  }
});

// Create Quest
router.post('/new', async (req, res) => {
  try {
    const result = await Quest.createQuest(req.body, req.user);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
