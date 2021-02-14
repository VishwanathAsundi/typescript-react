// Code goes here!
import { Product } from './product.model';
import { plainToClass } from 'class-transformer';
import 'reflect-metadata';

import { validate } from 'class-validator';

let products = [{ title: 'vishwa', price: 10 }, { title: 'svfghsf', price: 90 }];
let instanceOfProds = plainToClass(Product, products);
for (const p of instanceOfProds) {
    console.log(p.getValue());
}

let newP = new Product('', -9);
validate(newP).then(errors => {
    console.log(errors);
})