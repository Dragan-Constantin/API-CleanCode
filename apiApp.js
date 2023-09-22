require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const filmRoutes = require('./routes/filmRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Replace username, password  and database in the .env file by your
// own login credentials and database to connect to your MongoDB database
// Otherwise, you can also replace it by the url to an other database of your own choosing
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DATABASE}.mongodb.net/?retryWrites=true&w=majority`, {
useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(cors());

app.use('/movies', filmRoutes);

try {app.listen(port, () => {
  console.log(`API LAUNCH: \x1b[42mSUCCESS\x1b[0m`);
  console.log(`Server is running on port ${port}`);
});
}
catch (error) {
  console.log(`API LAUNCH: \x1b[41mFAIL\x1b[0m`);
  console.log(error);
}