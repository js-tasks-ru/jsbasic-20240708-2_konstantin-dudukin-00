function factorial(n) {

  result = 1;

  if(n == 0 || n == 1) {
    return result;
  } else {
    for(let i = 1; i <= n; i++) {
      result *= i;
    }
  }

  return result;
}