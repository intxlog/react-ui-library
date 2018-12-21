// import requiredRegex from '../regex'
import requiredValidator from '..'

describe('requiredValidator', () => {
  it('returns correct when field is not populated', () => {
    const requiredInfo = 'invalid format'
    expect(requiredValidator(requiredInfo)).toEqual({
      valid: true,
      message: null,
      value: "invalid format"
    })
  }),
  it('returns the correct value if field is required', () => {
    const requiredInfo = ''
    expect(requiredValidator(requiredInfo).toEqual({
      message: 'Field is required'
    }))
  })

})
