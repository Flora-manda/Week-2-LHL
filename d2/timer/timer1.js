const args = process.argv.slice(2);

console.log("There are " + args.length + " numbers to add");

for (let i = 0; i < args.length; i++) {
  setTimeout(
    () =>
      process.stdout.write("\x07" + "beep at: " + args[i] + " seconds" + "\n"),
    1000 * args[i]
  );
}