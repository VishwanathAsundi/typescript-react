import {
    IsNotEmpty, IsPositive, IsNumber
} from 'class-validator';

export class Product {
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsPositive()
    price: number;


    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
    getValue() {
        return [this.title, `$${this.price}`];
    }
}