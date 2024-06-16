const FIZZ_MULTIPLIER = 3
const BUZZ_MULTIPLIER = 5
const BUZZ = 'Buzz'
export function fizzBuzz(input: number): any {
  const FIZZ = 'Fizz'
  if (input % FIZZ_MULTIPLIER === 0 && input % BUZZ_MULTIPLIER === 0) return FIZZ + BUZZ
  else if (input % FIZZ_MULTIPLIER === 0) return FIZZ
  else if (input % BUZZ_MULTIPLIER === 0) return BUZZ
  else return input.toString()
}
