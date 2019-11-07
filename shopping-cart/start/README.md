# Shopping Cart

In this exercise we'll put in practice our Node.js knowledge and create some actual functionality by simulating a shopping cart.

## Configuring Project

1. Start by installing dependencies for the client-side application.
   1. Inside of the `cart` folder run `npm i && npm start` to install dependencies and run the application.
2. Install the Node.js server dependencies.
   1. Inside of the [`start/api`](./api) folder run `npm i`.
   2. To start the server in watch mode run `npm run watch`. This will run the server and restart it everytime a file change is detected.

### Cart Functionality

As you can see from the client-side application, we have already setup the endpoints to get products which is used to display them.
We'll be working on adding on the functionality to add and remove products from the cart, adjust the quantity and completely empty out the cart.

## Files to modify

[Controller](./api/routes/cart/controller.js)
[Routes](./api/routes/cart/index.js)
[Model](./api/routes/cart/model.js)