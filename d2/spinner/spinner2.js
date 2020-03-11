process.stdout.write("hello from spinner1.js... \rheyyy\n");
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);

let dashes = ["|", "/", "-", "\\"];

delay = 900;

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    process.stdout.write("\r " + dashes[i] + " ");
  }, delay);

  delay += 200;
}

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\n");
}, 1700);