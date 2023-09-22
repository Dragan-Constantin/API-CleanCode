require('dotenv').config()
const mongoose = require('mongoose');
const Movie = require('./models/movie');

// Replace username, password  and database in the .env file by your
// own login credentials and database to connect to your MongoDB database
// Otherwise, you can also replace it by the url to an other database of your own choosing
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DATABASE}.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleMovies = [
  {
    title: 'Star Wars: Episode I - The Phantom Menace',
    director: 'George Lucas',
    year: 1999,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: Episode II - Attack of the Clones',
    director: 'George Lucas',
    year: 2002,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: The Clone Wars',
    director: 'Dave Filoni',
    year: 2008,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: Episode III - Revenge of the Sith',
    director: 'George Lucas',
    year: 2005,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: The Bad Batch',
    director: 'Dave Filoni',
    year: 2021,
    genre: 'Science-Fiction',
  },
  {
    title: 'Solo: A Star Wars Story',
    director: 'Ron Howard',
    year: 2018,
    genre: 'Science-Fiction',
  },
  {
    title: 'Obi-Wan Kenobi',
    director: 'Deborah Chow',
    year: 2022,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: Rebels',
    director: 'Dave Filoni',
    year: 2014,
    genre: 'Science-Fiction',
  },
  {
    title: 'Andor',
    director: 'Tony Gilroy',
    year: 2022,
    genre: 'Science-Fiction',
  },
  {
    title: 'Rogue One: A Star Wars Story',
    director: 'Gareth Edwards',
    year: 2016,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    director: 'George Lucas',
    year: 1977,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    director: 'George Lucas',
    year: 1980,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: Episode VI - Return Of The Jedi',
    director: 'George Lucas',
    year: 1983,
    genre: 'Science-Fiction',
  },
  {
    title: 'The Mandalorian',
    director: 'Dave Filoni, Jon Favreau',
    year: 2019,
    genre: 'Science-Fiction',
  },
  {
    title: 'The Book of Boba Fett',
    director: 'Dave Filoni, Jon Favreau',
    year: 2021,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: Ahsoka',
    director: 'Dave Filoni, Jon Favreau',
    year: 2023,
    genre: 'Science-Fiction',
  },
  {
    title: 'Star Wars: Resistance',
    director: 'Justin Ridge',
    year: 2018,
    genre: 'Science-Fiction',
  }
  // Add more movie objects as needed
];

const seedDatabase = async () => {
  await Movie.deleteMany({}); // Clear existing data
  await Movie.insertMany(sampleMovies); // Insert sample data
  mongoose.connection.close();
};

seedDatabase();