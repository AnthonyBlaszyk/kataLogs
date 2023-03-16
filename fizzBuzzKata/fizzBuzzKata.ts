function logNumber() {
  for (let n = 0; n < 30; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    }
    if (n % 3 === 0) {
      console.log("Fizz");
      continue;
    }
    if (n % 5 === 0) {
      console.log("Buzz");
      continue;
    }
    console.log(n);
  }
}

logNumber();
