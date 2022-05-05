const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(authRoutes);

const mongoUri = 'mongodb+srv://davinder:davinder@cluster0.ivgka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri);

mongoose.connection.on('connected',() => {
    console.log('Connected to Mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo',err);
});

app.get('/', (req, res) => {
    res.send('Hi There!');
});

// 3000 is port
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
