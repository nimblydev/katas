import { describe, it, expect } from 'vitest'
import { fizzBuzz } from './tdd.fizz-buzz'

describe('fizzBuzz', () => {
  it('should return 1 when input is 1', () => {
    expect(fizzBuzz(1)).toBe('1')
  })
  it('should return 2 when input is 2', () => {
    expect(fizzBuzz(2)).toBe('2')
  })
  it('should return same number when input is not divisible by 3 or 5', () => {
    expect(fizzBuzz(4)).toBe('4')
  })
})
