import { describe, it, expect } from 'vitest'
import { fizzBuzz } from './tdd.fizz-buzz'

describe('fizzBuzz', () => {
  it('should return 1 when input is 1', () => {
    expect(fizzBuzz(1)).toBe('1')
  })
})
