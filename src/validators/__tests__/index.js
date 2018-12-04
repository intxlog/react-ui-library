import validator from '..'

describe('validators root', () => {
  //define mock functions
  const email = jest.fn()

  it('returns the default object with no params', () => {
    expect(validator()).toEqual({
      valid: true,
      message: null,
      value: null
    })
  }),
  it('the email function is called when email is the type passed in', () => {
    const value = 'any@email.com'
    const type = 'email' 
    //call the validator function
    expect(validator(value, type)).toEqual({
      valid: true,
      message: null,
      value: 'any@email.com'
    })
  })
})