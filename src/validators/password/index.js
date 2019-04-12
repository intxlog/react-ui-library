import regex from './regex.js'

export default function (pwd) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: null
  }

  //make sure the value is in the correct format according to regex
  if (!regex(pwd)) {
    payload.message = `Invalid format`
  } else {
    payload.valid = true
    payload.value = pwd
  }
  return payload
}
