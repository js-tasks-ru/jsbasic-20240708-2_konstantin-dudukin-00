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

/* let result = showSalary(users, age);

let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1, <...и другие пользователи>] */