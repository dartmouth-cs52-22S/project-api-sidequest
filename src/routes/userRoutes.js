import { Router } from 'express';
import * as Users from '../controllers/user_controller';
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

// **************** SO WHAT DO WE WANNA DO FOR UPDATE. HOW TO GO ABOUT IT? *******************
// HOW DO I TAKE CARE OF MULTIPLE FIELDS. huh?
// HOW WILL AUTHENTICATIONWORK WITH THISSSS
router.put('/:id', async (req, res) => {
  try {
    const result = await Users.updateUser(req.params.id, req.body);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
});
export default router;
