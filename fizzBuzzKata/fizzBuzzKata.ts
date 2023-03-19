export function fizzBuzz(n: number): string | number{
  if(n % 3 === 0 && n % 5 === 0){
    return "FizzBuzz"
  }
  if(n % 3 === 0){
    return "Fizz"
  }
  if(n % 5 === 0){
    return "Buzz"
  }
  return n
}

function logNumber() {
  for (let n = 0; n <= 100; n++) {
    console.log(fizzBuzz(n))
  }
}
