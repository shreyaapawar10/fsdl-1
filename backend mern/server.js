const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://shreyapawar_db_user:Dudewtf123@cluster0.hr1cbth.mongodb.net/portfolio?retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error ❌", err));

const studentRoutes = require('./routes/studentRoutes');
app.use('/student', studentRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});