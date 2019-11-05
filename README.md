# [Node.js Workshop](https://docs.google.com/presentation/d/13dK6_AeKu7epd-HZdxGYkl6mt1sDT1mjX84mNfF_9gQ/edit?usp=sharing)

## Agenda

### What's...
- JavaScript
- Node.js
- Runtime
- the point!

### Let's write (and run) some code! (hello-world)

Let's start off writing some code and seeing how to run it on Node.js.
While we're at it, let's kick off our first server!

### Modules, Modules, Modules

Modules are fundamental part for creating Node.js applications. We'll take a look at how we can create our own modules and use existing ones from NPM.

#### Creating modules and using Node.js Standard Modules (modules)

We'll create our own CommonJS module for reading the files in a directory and filtering them. We'll take advantage of the `fs` Node.js module to access the file system.

#### NPM what? (fetch-dogs)

We'll be taking a look at `npm` module repository and how we can use it to extend the functionality of our applications.
We are going to install the `polimorphic-fetch` package and query the [Dog API](https://dog.ceo/dog-api/) to fetch ourselves some dogs 🐶. 

### Lets make an create an API (shopping-cart)

[Express](https://expressjs.com) is Node.js most used framework. We'll be taking a look at how to use it to create a full fletched API server and creating the server side of a shopping cart application.


### Let's save that stuff (shopping-cart-mongodb)

Now that we finished up with the functionality for our shopping cart API, let's persist this information to a database.
We'll be using MongoDB in combination with the Mongoose ORM to create reusable models and persist our information.
