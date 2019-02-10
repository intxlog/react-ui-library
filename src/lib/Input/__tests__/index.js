import React from 'react'
import { shallow } from 'enzyme'
import Input from '..'

describe('Input', () => {
  //mock functions
  const onChangeMock = jest.fn()
  const onBlurMock = jest.fn()
  const isValidMock = jest.fn()

  //Spies
  let checkRequiredSpy
  let validateSpy
  
  let props = {
    onChange: onChangeMock,
    onBlur: onBlurMock,
    isValid: isValidMock
  }
  
  //create a shallow wrapper that can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<Input {...props}/>)
    checkRequiredSpy = jest.spyOn(wrapper.instance(), 'checkRequired')
    validateSpy = jest.spyOn(wrapper.instance(), 'validate')
  })


  //reset the mocks after each test
  afterEach(() => {
    onChangeMock.mockReset()
    onBlurMock.mockReset()
    isValidMock.mockReset()
    checkRequiredSpy.mockRestore()
    validateSpy.mockRestore()
  })

  it('renders correctly', () => {
    // const wrapper = shallow( <Input/> )
    expect(wrapper).toMatchSnapshot()
  })
  describe('when disabled is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
          disabled: true
      })
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('when validate is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        validate: true
      })
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('when required is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        required: false
      })
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('when type is password', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        type:'password',
        password: true
      })
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('when idForLabel prop is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        idForLabel: `exampleID`
      })
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('when placeholder prop is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        placeholder: `Example Text`
      })
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('when infoText prop is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        infoText: `Example Text`
      })
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('when error prop is true', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        error: true
      })
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('when value prop is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        value: `Example Text`
      })
      expect(wrapper).toMatchSnapshot()
    })
  })

  //checkbox testing
  describe('checkbox', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        type:'checkbox',
        idForLabel:`exampleID`
      })
      expect(wrapper).toMatchSnapshot()
    })
  })


  //Radio testing
  describe('radio', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        type:'radio',
        idForLabel:`exampleID`,
        value: true
      })
      expect(wrapper).toMatchSnapshot()
    })
  })

  //Select testing
  describe('select', () => {
    describe('renders correctly', () => {
      it('when type is select', () => {
        wrapper.setProps({
          type: 'select'
        })
        expect(wrapper).toMatchSnapshot()
      }),
      it('when disabled is true', () => {
        wrapper.setProps({
          type: 'select',
          disabled: true
        })
        expect(wrapper).toMatchSnapshot()
      })
    })
  })

  //TextArea testing
  describe('textArea', () => {
    it('renders correctly', () => {
      wrapper.setProps({
        type: 'textArea'
      })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('textArea', () => {
    describe('renders correctly', () => {
      it('when type is textArea', () => {
        wrapper.setProps({
          type: 'textArea'
        })
        expect(wrapper).toMatchSnapshot()
      }),
      it('when disabled is true', () => {
        wrapper.setProps({
          type: 'textArea',
          disabled: true
        })
        expect(wrapper).toMatchSnapshot()
      })
    })
  })

  //Internal Methods
  describe('when checkRequired is called', () => {
    describe('with a valid value', () => {
      it('returns the correct value', () => {
        expect(wrapper.instance().checkRequired('foo')).toEqual(true)
      })
    })
    describe('with a invalid value', () => {
      it('returns the correct value', () => {
        expect(wrapper.instance().checkRequired('')).toEqual(false)
      })
    })
  })

  describe('when checkValid is called', () => {
    describe('with ""', () => {
      it('returns the correct value', () => {
        wrapper.setProps({
          type: `email`
        })
        expect(wrapper.instance().checkValid('')).toEqual(false)
      })
    })
    describe('with test@test.com', () => {
      it('returns the correct value', () => {
        wrapper.setProps({
          type: `email`
        })
        expect(wrapper.instance().checkValid('test@test.com')).toEqual(true)
      })
    })
  })
  
  describe('when validate is called', () => {
    describe('with a value and required prop is true', () => {
      it('calls the correct method', () => {
        wrapper.setProps({
          required: true
        })

        //call the method
        wrapper.instance().validate('test')

        //check the value of the spy
        expect(checkRequiredSpy).toHaveBeenCalled()
      })
    })
    describe('with a value and disabled prop is true', () => {
      it('calls the correct method', () => {
        wrapper.setProps({
          disabled: true
        })

        //call the method
        wrapper.instance().validate('test')

        expect(wrapper.state().isValid).toEqual(true)
      })
    })
  })

  describe('when handleOnChange is called', () => {
    describe('when the entered value in state is true', () => {
      it('calls the validate method', () => {
        const e = {
          target: {
            value: 'test'
          }
        }

        //set state
        wrapper.setState({
          entered: true
        })

        //call the method
        wrapper.instance().handleOnChange(e)
  
        expect(validateSpy).toHaveBeenCalled()
      })  
    })
  })

  describe('when handleOnBlur is called', () => {
    it('calls the correct function', () => {
      wrapper.setState({
        value: 'test'
      })
      wrapper.instance().handleOnBlur()
      expect(onBlurMock).toHaveBeenCalled()
      expect(onBlurMock).toHaveBeenCalledWith('test')
    })
  })

  describe('when component mounts', () => {
    describe('when there is no default value', () => {
      it('calls the correct function', () => {
        expect(isValidMock).toHaveBeenCalled()
        expect(isValidMock).toHaveBeenCalledWith(false)
      })
    })
    describe('when given a defaultValue of "test"', () => {
      it('calls the correct function and sets the correct state', () => {
        wrapper.setProps({
          defaultValue: 'test'
        })

        //call the method
        wrapper.instance().componentDidMount()
        expect(wrapper.state().value).toEqual('test')
        expect(validateSpy).toHaveBeenCalled()
        expect(validateSpy).toHaveBeenCalledWith('test')
      })
    })  
    describe('when given a defaultValue of "IUILIBdefault"', () => {
      it('calls the correct function', () => {
        wrapper.setProps({
          defaultValue: 'IUILIBdefault'
        })

        //call the method
        wrapper.instance().componentDidMount()
        expect(isValidMock).toHaveBeenCalled()
        expect(isValidMock).toHaveBeenCalledWith(false)
      })
    }) 
  })

  describe('when componentDidUpdate is called', () => {
    describe('formSubmitted prop changes', () => {
      it('calls the correct function and state is correct', () => {
        //set the props
        wrapper.setProps({
          formSubmitted: 0
        })

        //change the props to trigger componentDidUpdate
        wrapper.setProps({
          formSubmitted: 1
        })

        expect(wrapper.state().entered).toEqual(true)
        expect(validateSpy).toHaveBeenCalled()
        expect(validateSpy).toHaveBeenCalledWith('')
      })
    })
  })

  describe('isValid state changes', () => {
    it('calls the correct function', () => {
      //change the state to trigger componentDidUpdate
      wrapper.setState({
        isValid: true
      })

      expect(isValidMock).toHaveBeenCalled()
      expect(isValidMock).toHaveBeenCalledWith(true)
    })
  })
})
