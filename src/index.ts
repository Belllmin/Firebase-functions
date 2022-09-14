import * as functions from 'firebase-functions';

const universal = require(`${process.cwd()}/dist/server/main`).app();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

/*
*   Get all products from google database
*/
export const getAllProducts = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});


  response.send("All products from firebase are returned!");
});

/*
*   Get product by product id
*/
export const getProductById = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});


  response.send("Product with id: is returned from firebase!");
});

/*
*   Add new product to google database
*/
export const addNewProduct = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});


  response.send("New product has been added to firebase!");
});

/*
*   Update product through product id
*/
export const updateProduct = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});


  response.send("Product with id: has been updated to firebase!");
});

/*
*   Delete product from google database by product id
*/
export const deleteProduct = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});


  response.send("Product with id: has been deleted from firebase!");
});

/*
*   Search product in google database by product id
*/
export const findProductById = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.send("Product found with id: !");
});

/*
*   Search product in google database by product name
*/
export const findProductByName = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.send("Product found with id: !");
});