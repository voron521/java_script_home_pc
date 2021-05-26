// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

'use strict'

let basket = {};

class Basket {
    constructor(name_product, coast) {
        this.name_product = name_product;
        this.coast = coast;
    }
    add_to_basket() {
        basket[this.name_product] = this.coast;
        return basket;
    }
}

let product_1 = new Basket('принтер', 156);
let product_2 = new Basket('компьютер', 2000);
let product_3 = new Basket('Мышь', 14);

product_1.add_to_basket()
product_2.add_to_basket()
product_3.add_to_basket()


console.log(basket);
