import einRegex from '../regex'
import einValidator from '..'

describe('einValidator', () => {
    it('returns the correct payload when given a valid ein', () => {
      const ein = 123456789
      expect(einValidator(ein)).toEqual({
        valid: true,
        message: null,
        value: 123456789
      })
    }),
    it('returns the correct payload when given an invalid ein', () => {
      const ein = 'invalid'
      expect(einValidator(ein)).toEqual({
        valid: false,
        message: "Invalid format",
        value: null
      })
    })
  })

  describe('einRegex', () => {
    it('returns true when given a valid ein', () => {
      const ein = 123456789
      expect(einRegex(ein)).toEqual(true)
    }),
    it('returns false when given an invalid ein', () => {
      const ein = 'invalid'
      expect(einRegex(ein)).toEqual(false)
    }),
    it('returns false when given a blank ein', () => {
      const ein = ''
      expect(einRegex(ein)).toEqual(false)
    })
  })

