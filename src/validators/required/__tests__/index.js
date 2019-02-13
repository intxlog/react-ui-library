// import funciton
import requiredValidator from '..'

describe('requiredValidator', () => {
  it('returns correct payload when val is ""', () => {
    expect(requiredValidator('')).toEqual({
      valid: false,
      message: 'Field is required',
      value: ''
    })
  }),
  it('returns the correct payload when val is null', () => {
    expect(requiredValidator(null)).toEqual({
      valid: false,
      message: 'Field is required',
      value: null
    })
  }),
  it('returns the correct payload when val has whitespace before or after', () => {
    expect(requiredValidator('  foo  ')).toEqual({
      valid: false,
      message: 'Check your spacing before and after characters',
      value: '  foo  '
    })
  }),
  it('returns the correct payload when val is not null or ""', () => {
    expect(requiredValidator('foo')).toEqual({
      valid: true,
      message: null,
      value: 'foo'
    })
  })
})
