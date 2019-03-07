function multi(num) {
  for (let i = num; i >= 1; i--) {
    if (i % 2 == 0) {
      continue;
    }
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
}

multi(9);
