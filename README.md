# API-CleanCode

To run the app, you will have to install through node the following extensions: *Express*, *Mongoose*, and *Cors*.

To install these, you can simply run this command:

```shell
npm i express mongoose cors
```

If it still doesn't work, you might have to install the MongoDB npm library. To do so, run the following:

```shell
npm install mongodb
```

To launch the api, open your terminal (`ctrl+j`) and run the following command:

```shell
node app.js
```

If you want to test if it did launch properly, open your web-browser and go to [this url](http://localhost:3000/).

The database used here is a MongoDB Atlas database. (You WILL have to replace `<user>` and `<password>` by your own).

addData.js allows you to add a test movie collection (Star Wars based).

If you want to test the POST, GET, etc. you can use the [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) VS:Code extension, or other solutions of your choosing (Postman, etc.)
