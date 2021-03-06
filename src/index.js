require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

// all the json info passed first then run request handler i.e. authRoutes
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://davinder:davinder@cluster0.ivgka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri);

mongoose.connection.on('connected',() => {
    console.log('Connected to Mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo',err);
});

// Here we use requireAuth
app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

// 3000 is port
app.listen(3000, () => {
    console.log('Listening on port 3000');
});