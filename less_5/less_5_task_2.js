// Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
// сгенерированная на базе JS:
// Пустая корзина должна выводить строку «Корзина пуста»;
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


'use strict'

let basket = {};
let count_products = 0;

class Basket {
    constructor(name_product, coast) {
        this.name_product = name_product;
        this.coast = coast;
    }
    add_to_basket() {
        basket[this.name_product] = this.coast;
        count_products = count_products + 1;
        return basket;
    }
}

let product_1 = new Basket('принтер', 156);
let product_2 = new Basket('компьютер', 2000);
let product_3 = new Basket('Мышь', 14);

product_1.add_to_basket()
product_2.add_to_basket()
product_3.add_to_basket()

let basket_1 = document.getElementById("basket");
let basket_window = document.createElement("div");

basket_window.style.height = "100px";
basket_window.style.width = "300px";
basket_window.border = '1px solid black';
basket_window.style.backgroundColor = "red";
let txt_basket = 'в корзине пусто';
if (count_products > 0) {
    basket_window.innerText = 'в корзине ' + count_products + ' товара(ов)';
} else {
    basket_window.innerText = 'В корзине пусто';
}

basket_1.appendChild(basket_window);
