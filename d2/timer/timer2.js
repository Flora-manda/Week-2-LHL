const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", key => {
  if (key === "b") {
    process.stdout.write("\x07");
  } else if (key >= 1 && key <= 9) {
    setTimeout(
      () => process.stdout.write(`settting timer for ${key} seconds:...`),
      key * 1000
    );
    setTimeout(() => process.stdout.write("\x07"), key * 1000);
  } else if (key === ".u003") {
    process.stdout.write(`Thanks for using me, ciao! ${process.exit()}`);
  }
});