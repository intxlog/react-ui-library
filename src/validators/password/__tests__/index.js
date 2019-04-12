import pwdRegex from '../regex'
import pwdValidator from '..'

describe('pwdValidator', () => {
  it('returns the correct payload when given a valid pwd', () => {
    const pwd = `Abcdef12!`
    expect(pwdValidator(pwd)).toEqual({
      valid: true,
      message: null,
      value: `Abcdef12!`
    })
  })
  it('returns the correct payload when given an invalid pwd', () => {
    expect(pwdValidator(123456789)).toEqual({
      valid: false,
      message: "Invalid format",
      value: null
    })
  })
})

describe('pwdRegex', () => {
  it('returns true when given a valid pwd', () => {
    const pwd = `Abcdef12!`
    expect(pwdRegex(pwd)).toEqual(true)
  })
  it('returns false when given an invalid pwd', () => {
    const pwd = 'invalid'
    expect(pwdRegex(pwd)).toEqual(false)
  })
  it('returns false when given a blank pwd', () => {
    const pwd = ''
    expect(pwdRegex(pwd)).toEqual(false)
  })
})
