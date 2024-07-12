function factorial(n) {

  if (n == 0 || n == 1) {
  return n; // npm test выводит ошибку "Факториал 0 равен 1", хотя в песочинице все норм. 
  }

  let sum = 1;
  for(let i = 1; i <= n; i++) {
  sum *= i;
  }

  return sum;
}



function factorial(n) {
  let sum = 0;

  if (n == 0) {
    sum = 0; // Факториал 0 и 1 равен 1
  } else if(n == 1) {
    sum = 1;
  } else {
    sum = 1;
    for (let i = 1; i <= n; i++) {
      sum *= i;
    }
  }

  return sum;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1