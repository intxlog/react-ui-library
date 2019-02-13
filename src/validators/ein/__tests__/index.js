import einRegex from '../regex'
import einValidator from '..'

describe('einValidator', () => {
  it('returns the correct payload when given a valid ein', () => {
    const ein = `12-3456789`
    expect(einValidator(ein)).toEqual({
      valid: true,
      message: null,
      value: `12-3456789`
    })
  })
  it('returns the correct payload when given an invalid ein', () => {
    expect(einValidator(`123456789`)).toEqual({
      valid: false,
      message: `Invalid format`,
      value: null
    })
  })
  it('returns the correct payload when given an invalid ein', () => {
    expect(einValidator('')).toEqual({
      valid: false,
      message: `Invalid format`,
      value: null
    })
  })
})

describe('einRegex', () => {
  it('returns true when given a valid ein', () => {
    const ein = `12-3456789`
    expect(einRegex(ein)).toEqual(true)
  })
  it('returns false when given an invalid ein', () => {
    const ein = 'invalid'
    expect(einRegex(ein)).toEqual(false)
  })
  it('returns false when given a blank ein', () => {
    const ein = ''
    expect(einRegex(ein)).toEqual(false)
  })
})

