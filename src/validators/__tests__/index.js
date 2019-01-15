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
  it('the ssn function is called when ssn is the type passed in', () => {
    const value = 123456789
    const type = 'ssn'
    
    expect(validator(value,type)).toEqual({
      valid: true,
      message: null,
      value: 123456789
    })
  })
})
