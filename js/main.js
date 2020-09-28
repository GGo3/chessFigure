// 1) Сделать шахматную доску, расставить фигуры. Использовать только JS, на html странице только один div. Стили можно описать в SCSS. 

let boardColumns = [];
const сhessBoard = document.querySelector('.main');
const chessFigures = ['&#9820', '&#9822', '&#9821',' &#9819', '&#9818','&#9821', '&#9822', '&#9820', '&#9823'];
let str = '';
let color = '';

for (let i = 0; i < 8; i++) {
  let boardRow = [];
  
  for ( let k = 0; k < 8; k++) {
    boardRow[k] = '';  
    if (i === 0 || i === 7) {
      boardRow[k] = `${chessFigures[k]}`;
      if (i === 7) {
        color = `style="color: #fff;"`;
      }
    } else if (i === 1 || i === 6) {
      boardRow[k] = `${chessFigures[8]}`;
      if (i === 6) {
        color = `style="color: #fff;"`;
      }
    } else {
      boardRow[k] = '';
    }
    if (((k + i) % 2) != 0 ) {
      
      str = `${str}<div class="black" ${color}>${boardRow[k]}</div>`;
    } else {
      str = `${str}<div class="white" ${color}>${boardRow[k]}</div>`;
       
    }
  }
  boardColumns[i] = boardRow;
}
сhessBoard.innerHTML = str;
