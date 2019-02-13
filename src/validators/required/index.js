import regex from './regex.js'

export default function (val) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: val
  }

  //make sure the value is not blank and no pre/post white
  if (val === null || val === '') {
    payload.message = `Field is required`
  }
 else if (!regex(val)){
    payload.message = `Check your spacing before and after characters`  
  } else {
    payload.valid = true
    payload.value = val
  }

  return payload
}