<a href="https://github.com/Dragan-Constantin/API-CleanCode/" target="_blank"><p align="center"> <img alt="API Server Icon" src="https://cdn-icons-png.flaticon.com/512/2164/2164832.png" width="225"></p></a>

<h1 align="center"><b>Clean Code Course<br>API Project Specs</b></h1>

### Exercise information

*Create an API to manage a collection of movies, series, and/or anime.*

**Objective** : Create a simple API to add, read, update and delete movies/anime from a virtual collection.

**Technologies to be used** :
1. Node.js
2. Express.js
3. Base de données de votre choix (par exemple MongoDB avec Mongoose, firebase, supabase, ou autre)


### Features to implement

1. **Add a movie/anime**:
    - Route: POST `/movies`
    - Request body:
      `{title: String, director: String, year: Number, genre: String}`
    - Response: The movie/anime added with a unique ID.
2. **Read all movies/anime**:
    - Route: GET `/movies`
    - Response: A list of all movies/animes.
3. **Lire un film/animé par ID** :
    - Route: GET `/movies/:id`
    - Response: Details of the given ID movie/anime.


### Clean code instructions

1. **Explicit variable names** : Make sure the names of variables, functions, etc. are clear, consize and explicit. For instance, use `movie` or `anime` instead of `mov` or `anim`.
2. **Modularity** : Make sure to separate your software in distinct modules. For instance, put the routes in a folder, the controllers in another one, the database in a third one, etc.
3. **Errors handling** : Handle all possible errors and return approriate responses. For instance, if a movie with a given ID is not found, return a response with status code 404.
4. **Smart comments** : Do not overload yoru code with comments, but add them only when necessary to clarify parts of the code that might lead to confusion.
5. **Tests** : If possible, write unit tests for all main features of your software to ensure their proper functioning.

### Bonus :
1. Implement an authentification to protect/restrict access to the API.
2. Add a feature to sort and filter movies/anime by title, director, year of release or genre.