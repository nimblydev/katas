const FIZZ_MULTIPLIER = 3
export function fizzBuzz(input: number): any {
  if (input % FIZZ_MULTIPLIER === 0) return 'Fizz'
  else if (input === 5) return 'Buzz'
  else return input.toString()
}
