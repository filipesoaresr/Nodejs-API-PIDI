const express = require('express');
const routes = express.Router();

const ProductMiddleware = require("./middlewares/ProductMiddleware");

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");
const PaymentOptionsController = require("./controllers/PaymentOptionsController");
const PromotionsController = require("./controllers/PromotionController");

//Produtos
routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductMiddleware.validateId, ProductController.update);
routes.delete("/products/:id", ProductMiddleware.validateId, ProductController.delete);

//User
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

//paymentOptions
routes.get("/payment-options", PaymentOptionsController.index);
routes.post("/payment-options", PaymentOptionsController.store);
routes.put("/payment-options/:id", PaymentOptionsController.update);
routes.delete("/payment-options/:id", PaymentOptionsController.delete);

//Promoions
routes.get("/promotions", PromotionsController.index);
routes.post("/promotions", PromotionsController.store);
routes.put("/promotions/:id", PromotionsController.update);
routes.delete("/promotions/:id", PromotionsController.delete);



module.exports = routes;

