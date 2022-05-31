import { Router } from 'express';
import * as Group from '../controllers/group_controller';

const router = Router();

// router.get('/', (req, res) => {
//   res.json({ message: 'welcome to our quest router!' });
// });

// Get all group
router.get('/all', async (req, res) => {
  try {
    const result = await Group.getGroups();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});
// get Quest
router.get('/:id', async (req, res) => {
  try {
    const result = await Group.getGroup(req.params.id);

    res.json(result);
  } catch (error) {
    res.status(404).json({ error });
  }
});

// Create group
router.post('/new', async (req, res) => {
  try {
    const result = await Group.createGroup(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//  delete group
router.delete('/:id', async (req, res) => {
  try {
    const result = await Group.deleteGroup(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
