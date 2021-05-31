'use strict'

// Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
// Доска должна быть верно разлинована на черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.





let body_my = document.getElementById("body");


function create_chess() {

    for (let count_1 = 1; count_1 <= 8; count_1++) {

        let vertical = 'vertical' + count_1;
        vertical = document.createElement("div");
        vertical.style.height = "100px";
        vertical.style.width = "800px";
        vertical.style.border = '1px solid black';
        vertical.id = vertical;
        body_my.appendChild(vertical);
        vertical.style.display = 'flex';


        for (let count = 1; count <= 8; count++) {
            let name = 'chess' + count;
            name = document.createElement("div");
            name.style.height = "100px";
            name.style.width = "100px";
            name.style.border = '1px solid black';

            if (count_1 % 2 == 0) {
                if (count % 2 == 0) {
                    name.style.backgroundColor = "white";
                } else {
                    name.style.backgroundColor = "black";
                }

            } else {
                if (count % 2 == 0) {
                    name.style.backgroundColor = "black";
                } else {
                    name.style.backgroundColor = "white";
                }
            }
            vertical.appendChild(name);
        }
    }
}

create_chess();
