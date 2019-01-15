import zipRegex from '../regex'
import zipValidator from '..'

describe('zipValidator', () => {
    it('returns the correct payload when given a valid zip', () => {
      const zip = 12345
      expect(zipValidator(zip)).toEqual({
        valid: true,
        message: null,
        value: 12345
      })
    })
    it('returns the correct payload when given an invalid zip', () => {
      const zip = 'invalid'
      expect(zipValidator(zip)).toEqual({
        valid: false,
        message: "Invalid format",
        value: null
      })
    })
  })

describe('zipRegex', () => {
it('returns true when given a valid zip', () => {
    const zip = 12345
    expect(zipRegex(zip)).toEqual(true)
}),
it('returns false when given an invalid zip', () => {
    const zip = 'invalid'
    expect(zipRegex(zip)).toEqual(false)
}),
it('returns false when given a blank zip', () => {
    const zip = ''
    expect(zipRegex(zip)).toEqual(false)
})
})