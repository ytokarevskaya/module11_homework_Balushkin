function getNum1(num1) {
      return function getNum2(num2) {
     console.log(num1 + num2); 
    }
}

const resultFunc = getNum1(44); 
resultFunc(55); 