import { Router } from 'express';
import * as Posts from '../controllers/post_controller';
import { requireAuth } from '../services/passport';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our post router!' });
});

router.put('/:id', requireAuth, async (req, res) => {
  try {
    const result = await Posts.updatePost(req.params.id, req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// DELETE POST
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const result = await Posts.deletePost(req.params.id);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// GET POST
router.get('/:id', async (req, res) => {
  try {
    const result = await Posts.getPost(req.params.id);

    res.json(result);
  } catch (error) {
    res.status(404).json({ error });
  }
});

// GET POSTS
router.get('/', async (req, res) => {
  try {
    const result = await Posts.getPosts();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/', requireAuth, async (req, res) => {
  try {
    const result = await Posts.createPost(req.body, req.user);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
