const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const filmRoutes = require('./routes/filmRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Replace <user> and <password> by your own username and password to connect to your MongoDB database
// Otherwise, you can also replace it by the url to an other database of your own choosing
mongoose.connect('mongodb+srv://<user>:<password>@cleancode-api.aqnmjeg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(cors());

app.use('/films', filmRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});