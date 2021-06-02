// Продолжаем реализовывать модуль корзины:
// Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
// Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.


'use strict'

let basket = {};
let count_products = 0;
let array = [];
let array_list = [];


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

function add_to_basket_class(name_obj_1, product, coast) {
    name_obj_1 = new Basket(product, coast);
    array.push(name_obj_1)
    array_list.push(product)
}

add_to_basket_class('product_1', 'Принтер', 156);
add_to_basket_class('product_2', 'Компьютер', 2000);
add_to_basket_class('product_3', 'Мышь', 14);


let basket_1 = document.getElementById("basket");
let basket_window = document.createElement("div");
let basket_list = document.getElementById("list_basket");

basket_list.style.height = "100px";
basket_list.style.width = "300px";
basket_list.style.backgroundColor = "grey";
basket_window.style.height = "100px";
basket_window.style.width = "300px";
basket_window.border = '1px solid black';
basket_window.style.backgroundColor = "red";
basket_window.style.borderRadius = "25px";

let txt_basket = 'в корзине пусто';
basket_window.innerText = 'В корзине пусто';

basket_1.appendChild(basket_window);


const bask = document.querySelector('#add_to_basket');

let i = 0;


function add_to_basket(e) {
    if (e.type == 'click' && i < array.length) {

        array[i].add_to_basket()
        i = i + 1;


        //let txt_basket = array[i];
        if (count_products > 0) {
            basket_window.innerText = 'в корзине ' + count_products + ' товара(ов)';
            basket_window.style.backgroundColor = "green";

            basket_list.innerText = array_list.slice(0, i);

        } else {
            basket_window.innerText = 'В корзине пусто';
        }
    } else {
        basket_window.innerText = 'в магазине закончились товары';
        basket_window.style.backgroundColor = "red";
    }
}

const delete_bask = document.querySelector('#delete_basket');

function delete_from_bask(s) {
    if (s.type == 'click') {
        i = 0;
        count_products = 0;
        basket_window.innerText = 'В корзине пусто';
        basket_list.innerText = 'вы удалил товары из корзины';
        basket_window.style.backgroundColor = "red";
    }
}


bask.addEventListener('click', add_to_basket);
delete_bask.addEventListener('click', delete_from_bask);
