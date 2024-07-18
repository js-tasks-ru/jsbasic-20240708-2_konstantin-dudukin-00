function sumSalary(salaries) {
  let sum = 0;
  
  for(let key in salaries) {
    
    let isSalary = Number.isFinite(salaries[key]) && typeof salaries[key] === 'number';
        
        
    if (isSalary) {
      sum += salaries[key];
    }
  }
  
  return sum;
}