/*УСЛОВИЯ*/

const num = 50;
/*(num === 50) ? console.log('Ok!') : console.log('Error!');*/

/*switch Поддерживает несколько проверок и условий*/
switch (num) {
  case 49:
    console.log('Неверно');
    break; /*Обязательная синтаксическая конструкция*/
  case 100:
    console.log('Неверно');
    break;
  case 50:
    console.log('В точку!');
    break;
  default: /*Действие по умолчанию (бывает, что кейсы не выполняются и прописываем это знач)*/
    console.log('Не в этот раз');
    break;
}