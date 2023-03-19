import {describe, expect, it} from '@jest/globals';
import {fizzBuzz} from "./fizzBuzzKata";

describe("fizzBuzz", () => {
  it("returns 'Fizz' for multiples of three", ()=>{
    expect(fizzBuzz(9)).toEqual("Fizz")
    expect(fizzBuzz(27)).toEqual("Fizz")
  })

  it("returns 'Buzz' for multiples of five", ()=>{
    expect(fizzBuzz(10)).toEqual("Buzz")
    expect(fizzBuzz(25)).toEqual("Buzz")
  })

  it("returns 'Buzz' for multiples of both three and five", ()=>{
    expect(fizzBuzz(0)).toEqual("FizzBuzz")
    expect(fizzBuzz(15)).toEqual("FizzBuzz")
    expect(fizzBuzz(30)).toEqual("FizzBuzz")
  })

  it("returns the given number in any other case", ()=>{
    expect(fizzBuzz(8)).toEqual(8)
    expect(fizzBuzz(32)).toEqual(32)
  })
});