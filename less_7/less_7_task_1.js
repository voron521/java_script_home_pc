'use strict'

const storage = window.localStorage;
let basket = {};

let array = [];
let list_basket = [];
let product_list = document.getElementById("list_products");



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

function add_html() {
    let result = array.reduce(function (el, prod) {
        let pr = JSON.stringify(prod.name_product);
        const html = `<div id="item-a${el}" class="task-item ${pr.done ? 'done' : ''}">
      <input id="item-${el}" type="checkbox" ${pr.done ? 'checked="checked"' : ''}>
      <p class="task-item__title">${pr}</p>
      
      </div>`


        product_list.insertAdjacentHTML('beforeend', html);
        return ++el;


    }, 0);




}


function add_to_basket_class(name_obj_1, product, coast) {
    name_obj_1 = new Basket(product, coast);
    array.push(name_obj_1)
    list_basket.push(product)
    return name_obj_1






}

let product_1 = add_to_basket_class('product_1', 'Принтер', 156);
let product_2 = add_to_basket_class('product_2', 'Компьютер', 2000);
let product_3 = add_to_basket_class('product_3', 'Мышь', 14);
add_html()



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
product_list.style.backgroundColor = "grey";
product_list.style.height = "auto";
product_list.style.width = "300px";

let txt_basket = 'в корзине пусто';
basket_window.innerText = 'В корзине пусто';

basket_1.appendChild(basket_window);


const bask = document.querySelector('#add_to_basket');

let i = 0;




function add_to_basket(e) {
    if (e.type == 'click') {

        let rezult = []
        let count_products = 0;
        let sum = 0;

        if (count_products < array.length) {

            for (let j = 0; j < array.length; j++) {




                let names = '#item-' + j
                let element = document.querySelector(names);
                if (element.checked) {
                    count_products = count_products + 1;
                    sum = sum + array[j].coast;


                    basket_window.innerText = 'в корзине ' + count_products + ' товара(ов)' + 'на сумму: ' + sum + ' р.';
                    basket_window.style.backgroundColor = "green";
                    rezult.push(list_basket[j])
                    basket_list.innerText = rezult;

                }
            }
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
        let count_products = 0;
        basket_window.innerText = 'В корзине пусто';
        basket_list.innerText = 'вы удалил товары из корзины';
        basket_window.style.backgroundColor = "red";
    }
}


bask.addEventListener('click', add_to_basket);
delete_bask.addEventListener('click', delete_from_bask);
