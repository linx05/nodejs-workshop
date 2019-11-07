# Shopping Cart with Database

In the last exercise we create the functionality for our shopping cart, but you may have noticed that everytime we restarted the server all the data was lost.
This was due to the data being just created in memory and not persisted anywhere.

In this exercise we'll be using MongoDB to persist the data to a NoSQL database through the user of the Mongoose ORM.

## Configuring Project

1. Start by installing dependencies for the client-side application.
   1. Inside of the `cart` folder run `npm i && npm start` to install dependencies and run the application.
2. Install the Node.js server dependencies.
   1. Inside of the [`start/api`](./api) folder run `npm i`.
   2. Copy the contests of the `.env` file inside of [`.env.zip`](../../.env.zip) to the [`.env` file](./api/.env) in the project folder.
   3. To start the server in watch mode run `npm run watch`. This will run the server and restart it everytime a file change is detected.

### Cart Functionality

We'll be working mostly on adjusting the model to start using a Mongoose model for the data. We'll also make adjustments to the controller to match the new API.

## Files to modify

[Controller](./api/routes/products/controller.js)
[Model](./api/routes/cart/model.js)

## Resources

[MongoDB](https://www.mongodb.com/)
[Mongoose](https://mongoosejs.com/docs/guide.html)
[Mongoose Schemas](https://mongoosejs.com/docs/api/schema.html)
[Mongoose Models](https://mongoosejs.com/docs/api/model.html#model_Model)