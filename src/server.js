import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';

import postRoutes from './routes/postRoutes';
import userRoutes from './routes/userRoutes';
import questRoutes from './routes/questRoutes';
import dailyQuestRoutes from './routes/dailyQuestRoutes';
import itemRoutes from './routes/itemRoutes';

// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable/disable http request logging
app.use(morgan('dev'));

// enable only if you want templating
app.set('view engine', 'ejs');

// enable only if you want static assets from folder static
app.use(express.static('static'));

// this just allows us to render ejs from the ../app/views directory
app.set('views', path.join(__dirname, '../src/views'));

// enable json message body for posting data to API
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use('/api/users', userRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/homeTab', postRoutes);
app.use('/api/dailyQuests', dailyQuestRoutes);
app.use('/api/items', itemRoutes);

// additional init stuff should go before hitting the routing

// default index route
app.get('/', (req, res) => {
  res.send('hi');
});

// START THE SERVER
// =============================================================================
async function startServer() {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/platform_db';
    await mongoose.connect(mongoURI);
    console.log(`Mongoose connected to: ${mongoURI}`);
    const port = process.env.PORT || 9090;
    app.listen(port);

    console.log(`Listening on port ${port}`);
  } catch (error) {
    console.error(error);
  }
}

startServer();
