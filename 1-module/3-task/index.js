function ucFirst(str) {
  if (str.length >= 1) {
    let firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
  } else if (str == "") {
    return str.charAt(0);
  } else {
    return undefined;
  }
}
