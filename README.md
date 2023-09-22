

<a href="https://github.com/Dragan-Constantin/API-CleanCode/" target="_blank"><p align="center"> <img alt="API Server Icon" src="https://cdn-icons-png.flaticon.com/512/2164/2164832.png" width="225"></p></a>


<h1 align="center"><b>Clean Code Course</b></h1>



<p align="center">
  <img align="center" alt="GitHub all releases" src="https://img.shields.io/github/downloads/Dragan-Constantin/API-CleanCode/total?style=for-the-badge">
  <img align="center" alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Dragan-Constantin/API-CleanCode?color=brightgreen&label=Size&style=for-the-badge">
  <img align="center" alt="Platforms" src="https://img.shields.io/badge/Platform-windows%20%20%7C%20%20linux%20%20%7C%20%20mac-lightgrey?style=for-the-badge">
</p>


This project is an API built during the Clean Code course in B2 - Digital Engineering at EFREI Paris (Class of 2025)

The API is supposed to be linked to a database of movies, tv-shows, animes, and others.


## Pre-requisite and dependencies

For this app to run, you will need to have Node.js installed.
You can download it on the Node.js [download page](https://nodejs.org/fr/download).

To run the app, you might have to install through node the following JavaScript modules:

* *Express* (for more [details](https://www.npmjs.com/package/express "expressjs npm package")) ;
* *Mongoose* (for more [details](https://www.npmjs.com/package/mongoose "mongoosejs npm package")) ;
* *Cors* (for more [details](https://www.npmjs.com/package/cors "cors package")) ;
* *Dotenv* (for more [details](https://www.npmjs.com/package/dotenv "dotenv npm package")) ;

To install these, you can simply run this command in the terminal of your choosing (`ctrl+j` in VS:Code):

```shell
npm i express mongoose cors dotenv
```

If it still doesn't work, you might have to install the [MongoDB](https://www.npmjs.com/package/mongodb "mongodb npm package") JavaScript module too.

To install it, you can simply run the following command in the terminal of your choosing:

```shell
npm i mongodb
```



## Run the API

To run this api app, open the terminal of your choosing and run the following node command:

```shell
node app.js
```

To quickly test if it did launch properly, open your web-browser and go to [http://localhost:3000/films](http://localhost:3000/films "localhost on port 3000").

If a dictionnary is displayed on your screen, congrats! The API launched correctly!

For this project, the database used is a [MongoDB Atlas](https://www.mongodb.com/atlas/database "MongoDB Atlas Database") database.

⚠️ **IMPORTANT :** You WILL have to replace `<user>` and `<password>` by your own login credentials to this database.

The file **addData.js** allows you to add a test movie collection (Star Wars based).

If you want to test the POST, GET, etc. you can use the [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) VS:Code extension, or other solutions of your choosing (Postman, etc.)
