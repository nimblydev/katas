const FIZZ_MULTIPLIER = 3
const BUZZ_MULTIPLIER = 5
const BUZZ = 'Buzz'
export function fizzBuzz(input: number): any {
  const FIZZ = 'Fizz'
  if (isMultipleOf(input, FIZZ_MULTIPLIER) && isMultipleOf(input, BUZZ_MULTIPLIER))
    return FIZZ + BUZZ
  else if (isMultipleOf(input, FIZZ_MULTIPLIER)) return FIZZ
  else if (isMultipleOf(input, BUZZ_MULTIPLIER)) return BUZZ
  else return input.toString()
}
function isMultipleOf(input: number, divider: number) {
  return input % divider === 0
}
