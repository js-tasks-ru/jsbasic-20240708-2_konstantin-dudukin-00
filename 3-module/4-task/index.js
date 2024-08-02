/* function showSalary(users, age) {
  let output = '';

  users
   .filter(item => parseInt(item.age) <= age)
   .forEach((item, index, arr) => {
       output += `${item.name}, ${item.balance}`
       
       if(index < arr.length - 1) {
         output += '\n'
       }
          
     });
  
   return output;
}

*/ 

function showSalary(users, age) {
  return users
    .filter(item => parseInt(item.age) <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
}