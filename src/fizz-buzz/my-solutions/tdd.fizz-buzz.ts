const FIZZ_MULTIPLIER = 3
export function fizzBuzz(input: number): any {
  if (input % FIZZ_MULTIPLIER === 0) return 'Fizz'
  else return input.toString()
}
