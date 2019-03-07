for (let i = 9; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + "*" + i + "=" + i * j + " ");
    if ((i * j).toString().length == 1 && j != 1) {
      process.stdout.write("  ");
    } else {
      process.stdout.write(" ");
    }
    if (i == j) {
      console.log("");
    }
  }
}

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + "*" + i + "=" + i * j + " ");
    if ((i * j).toString().length == 1 && j != 1) {
      process.stdout.write("  ");
    } else {
      process.stdout.write(" ");
    }
    if (i == j) {
      console.log("");
    }
  }
}
