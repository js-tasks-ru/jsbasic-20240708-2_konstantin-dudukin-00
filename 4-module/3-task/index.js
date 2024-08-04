function highlight(table) {
  let tableRows = table.rows;

  // Проходим по Status
  for (let i = 1; i < table.rows.length; i++) {
    if(tableRows[i].children[3].dataset.available === 'true') {
      tableRows[i].children[3].classList.add('available');
    } else if(tableRows[i].children[3].dataset.available === 'false') {
      tableRows[i].children[3].classList.add('unavailable');
    } else if(tableRows[i].children[3].dataset.available === undefined) {
        tableRows[i].children[3].hidden = true;
    }
  }

  // Проходим по Gender
  for (let i = 1; i < table.rows.length; i++) {
    if(tableRows[i].children[2].innerText === 'm') {
      tableRows[i].children[2].classList.add('male');
    } else {
      tableRows[i].children[2].classList.add('female');
    }
  }

  // Проходим по Age
  for (let i = 1; i < table.rows.length; i++) {
    let age = tableRows[i].children[1].innerText;

    if(parseInt(age) <= 18) {
      tableRows[i].children[1].style="text-decoration: line-through";
    }
  }
}