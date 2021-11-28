"use strict";

function createMatrix(parent, x, y,words) {
    for (let r=1; r<=x; r++) {
        let row = document.createElement('div');
        row.classList.add('row',`row-${r}`);
        for (let c=1; c<=y; c++) {
            let col = document.createElement('div');
            col.classList.add('cell',`row-${r}`,`col-${c}`);
            let randWord = Math.floor(Math.random() * words.length);
            randWord = words[randWord];
            col.innerText = randWord;
            row.appendChild(col);
        }
        parent.appendChild(row);
    }
}

function createLightLine(matrix, y, timeout) {
    // for (let i=1; i<=x; i++) {
    //     let cell =  document.querySelector(`.col-${i}.row-${y}`);
    //     cell.classList.add('.active-cell');
    //     console.log(i);
    //     document.querySelector(`.col-${i}.row-${y}`).classList.remove('.active-cell');
    // }
    let i=0,
        j=0;
    let interval = setInterval(()=>{
        i++;
        if (i > matrix.x) {
            i = 0;
            clearInterval(interval);
        } else {
            let cell =  matrix.parent.querySelector(`.row-${i}.col-${y}`);
            if (cell !==  null){
                if (!cell.classList.contains('active-cell')) {
                    cell.classList.add('active-cell');
                }
            }
        }
    }, timeout);

    setTimeout(()=>{
        let interval2 = setInterval(()=>{
            j++;
            if (j > matrix.x) {
                j = 0;
                clearInterval(interval2);
            } else {
                let cell =  matrix.parent.querySelector(`.row-${j}.col-${y}`);
                if (cell !==  null) {
                    if (cell.classList.contains('active-cell')) {
                        cell.classList.remove('active-cell');
                    }
                }
            }
        }, timeout)
    },1000);

}


let matrix = {
    parent: document.querySelector('.matrix'),
    x: 50,
    y: 100,
    words: 'qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъэждлорпавыфячсмитьбюё'.split('')
};

createMatrix(matrix.parent, matrix.x,matrix.y, ['']);


setInterval(()=>{
    let randCol = Math.floor(Math.random() * matrix.y);
    createLightLine(matrix, randCol, 50);
}, 200);