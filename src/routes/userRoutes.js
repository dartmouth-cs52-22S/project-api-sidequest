import { Router } from 'express';
import * as Users from '../controllers/user_controller';
// import * as Quest from '../controllers/quest_controller';
// import { requireSignin } from '../services/passport';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our user router!' });
});

// router.post('/signin', async (req, res) => {
//   try {
//     const token = Users.signin(req.user);
//     res.json({ token, email: req.user.email });
//   } catch (error) {
//     res.status(422).send({ error: error.toString() });
//   }
// });

// Create User
router.post('/new', async (req, res) => {
  try {
    const token = await Users.signup(req.body);
    console.log(token);
    res.json({ token, email: req.body.email });
  } catch (error) {
    res.status(422).send({ error: error.toString() });
  }
});

// Get all users
router.get('/all', async (req, res) => {
  try {
    const result = await Users.getUsers();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await Users.getUser(req.params.id);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Users.updateUser(req.params.id, req.body);
    const result = await Users.getUser(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// router.put('addQuest/:id', async (req, res) => {
//   try {
//     const newQuest = await Quest.createQuest();
//     await Users.updateUser(req.params.id, req.body);
//     const result = await Users.getUser(req.params.id);
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

//  delete all users
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Users.deleteUser(id.substring(1));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});
export default router;
