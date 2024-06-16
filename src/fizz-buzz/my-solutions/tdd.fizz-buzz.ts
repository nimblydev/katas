const FIZZ_MULTIPLIER = 3
const BUZZ_MULTIPLIER = 5
export function fizzBuzz(input: number): any {
  if (input % FIZZ_MULTIPLIER === 0 && input % BUZZ_MULTIPLIER === 0) return 'FizzBuzz'
  else if (input % FIZZ_MULTIPLIER === 0) return 'Fizz'
  else if (input % BUZZ_MULTIPLIER === 0) return 'Buzz'
  else return input.toString()
}
