"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("./product.model");
const class_transformer_1 = require("class-transformer");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
let products = [{ title: 'vishwa', price: 10 }, { title: 'svfghsf', price: 90 }];
let instanceOfProds = class_transformer_1.plainToClass(product_model_1.Product, products);
for (const p of instanceOfProds) {
    console.log(p.getValue());
}
let newP = new product_model_1.Product('', -9);
class_validator_1.validate(newP).then(errors => {
    console.log(errors);
});
//# sourceMappingURL=app.js.map