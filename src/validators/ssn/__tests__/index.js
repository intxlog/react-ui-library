import ssnRegex from '../regex'
import ssnValidator from '..'

describe('ssnValidator', () => {
  it('returns the correct payload when given a valid ssn', () => {
    const ssn = 123456789
    expect(ssnValidator(ssn)).toEqual({
      valid: true,
      message: null,
      value: 123456789
    })
  })
  it('returns the correct payload when given an invalid ssn', () => {
    const ssn = 'invalid'
    expect(ssnValidator(ssn)).toEqual({
      valid: false,
      message: "Invalid format",
      value: null
    })
  })
})

describe('ssnRegex', () => {
  it('returns true when given a valid ssn', () => {
    const ssn = 123456789
    expect(ssnRegex(ssn)).toEqual(true)
<<<<<<< HEAD
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
=======
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
>>>>>>> 48532b754f5a1f52d1cb18306f022a72c4b659dd
