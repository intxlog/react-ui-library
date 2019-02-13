import ssnRegex from '../regex'
import ssnValidator from '..'

describe('ssnValidator', () => {
  it('returns the correct payload when given a valid ssn', () => {
    const ssn = `123-45-6789`
    expect(ssnValidator(ssn)).toEqual({
      valid: true,
      message: null,
      value: `123-45-6789`
    })
  })
  it('returns the correct payload when given an invalid ssn', () => {
    expect(ssnValidator(123456789)).toEqual({
      valid: false,
      message: "Invalid format",
      value: null
    })
  })
})

describe('ssnRegex', () => {
  it('returns true when given a valid ssn', () => {
    const ssn = `123-45-6789`
    expect(ssnRegex(ssn)).toEqual(true)
  })
  it('returns false when given an invalid ssn', () => {
    const ssn = 'invalid'
    expect(ssnRegex(ssn)).toEqual(false)
  })
  it('returns false when given a blank ssn', () => {
    const ssn = ''
    expect(ssnRegex(ssn)).toEqual(false)
  })
})
