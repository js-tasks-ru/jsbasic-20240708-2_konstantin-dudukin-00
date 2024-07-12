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