function titleCase(string) {
  let arrayOfString = string.split(" ");
  let result = "";
  for (let word of arrayOfString) {
    let result2 = "";
    result2 += word.charAt(0).toUpperCase();
    for (let i = 1; i < word.length; i++) {
      result2 += word.charAt(i).toLowerCase();
    }
    result += result2 + " ";
  }
  return result.trim();
}

console.log(titleCase("my name is flora"));