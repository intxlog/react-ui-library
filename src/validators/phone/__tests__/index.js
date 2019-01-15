import phoneRegex from '../regex'
import phoneValidator from '..'

describe('phoneValidator', () => {
  it('returns the correct payload when given a valid phone', () => {
    const phone = 1234567890
    expect(phoneValidator(phone)).toEqual({
      valid: true,
      message: null,
      value: 1234567890
    })
  }),
  it('returns the correct payload when given an invalid phone', () => {
    const phone = 'invalid'
    expect(phoneValidator(phone)).toEqual({
      valid: false,
      message: "Invalid format",
      value: null
    })
  })
})

describe('phoneRegex', () => {
  it('returns true when given a valid phone#', () => {
    const phone = 1234567890
    expect(phoneRegex(phone)).toEqual(true)
  }),
  it('returns false when given an invalid phone#', () => {
    const phone = 'invalid'
    expect(phoneRegex(phone)).toEqual(false)
  }),
  it('returns false when given a blank phone#', () => {
    const phone = ''
    expect(phoneRegex(phone)).toEqual(false)
  })
})