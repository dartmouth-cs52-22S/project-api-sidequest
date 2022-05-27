import { Router } from 'express';
import * as Posts from '../controllers/post_controller';
import { requireAuth } from '../services/passport';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our post router!' });
});

router.put('posts/:id', requireAuth, async (req, res) => {
  try {
    const result = await Posts.updatePost(req.params.id, req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// DELETE POST
router.delete('posts/:id', requireAuth, async (req, res) => {
  try {
    const result = await Posts.deletePost(req.params.id);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// GET POST
router.get('posts/:id', async (req, res) => {
  try {
    const result = await Posts.getPost(req.params.id);

    res.json(result);
  } catch (error) {
    res.status(404).json({ error });
  }
});

// GET POSTS
router.get('/posts', async (req, res) => {
  try {
    const result = await Posts.getPosts();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/posts', async (req, res) => {
  console.log(req);
  try {
    const result = await Posts.createPost(req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
