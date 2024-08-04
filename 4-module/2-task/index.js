function makeDiagonalRed(table) {

  for (let counter = 0; counter < table.rows.length; counter++) {
    tableCells = table.rows[counter].cells[counter];
    tableCells.style.backgroundColor = 'red';
  }
  
}
