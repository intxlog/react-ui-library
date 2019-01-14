import passwordRegex from '../regex'
import passwordValidator from '..'

describe('passwordValidator', () => {
  it('returns the correct payload when given a valid password', () => {
    const password = 'VALID'
    expect(passwordValidator(password)).toEqual({
      valid: true,
      message: null,
      value: "VALID"
    })
  }),
  it('returns the correct payload when given an invalid password', () => {
    const password = 'invalid'
    expect(passwordValidator(password)).toEqual({
      valid: false,
      message: "Invalid format",
      value: null
    })
  })
})

describe('passwordRegex', () => {
  it('returns true when given a valid password', () => {
    const password = 'VALID'
    expect(passwordRegex(password)).toEqual(true)
  }),
  it('returns false when given an invalid password', () => {
    const password = 'invalid'
    expect(passwordRegex(password)).toEqual(false)
  }),
  it('returns false when given a blank password', () => {
    const password = ''
    expect(passwordRegex(password)).toEqual(false)
  })
})