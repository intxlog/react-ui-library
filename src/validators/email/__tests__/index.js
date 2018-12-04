import emailRegex from '../regex'
import emailValidator from '..'

describe('emailValidator', () => {
  it('returns the correct payload when given a valid email', () => {
    const email = 'validEmail@domain.com'
    expect(emailValidator(email)).toEqual({
      valid: true,
      message: null,
      value: 'validemail@domain.com'
    })
  }),
  it('returns the correct payload when given an invalid email', () => {
    const email = 'invalid'
    expect(emailValidator(email)).toEqual({
      valid: false,
      message: `Invalid format`,
      value: null
    })
  }),
  it('returns the correct payload when given a blank email', () => {
    const email = ''
    expect(emailValidator(email)).toEqual({
      valid: false,
      message: `Cannot be blank`,
      value: null
    })
  })
})

describe('emailRegex', () => {
  it('returns true when given a valid email', () => {
    const email = 'validEmail@domain.com'
    expect(emailRegex(email)).toEqual(true)
  }),
  it('returns false when given an invalid email', () => {
    const email = 'invalid'
    expect(emailRegex(email)).toEqual(false)
  }),
  it('returns false when given a blank email', () => {
    const email = ''
    expect(emailRegex(email)).toEqual(false)
  })
})