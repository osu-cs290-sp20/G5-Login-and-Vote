const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.port || 3001;
const auth = require('./routes/auth');
// This is intended as a task after assignment is complete
//const createUserRoute = require('./routes/createUser');
const dotenv = require('dotenv');

dotenv.config();

// connect db
mongoose.connect(process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('connected to mongoose'),
);

app.use(express.json());

// middelware
app.use('/api/user', auth);
// This is intended as a task after assignment is complete
//app.use('/api/create-user', createUserRoute);

// PRODUCTION //
///*
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
//*/

app.listen(port, () => console.log('server running'));