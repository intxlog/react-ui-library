import emailRegex from '../regex'

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