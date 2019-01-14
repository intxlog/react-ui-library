import regex from './regex.js'

export default function (password) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: null
  }

  //make sure the value is in the correct format according to regex
  if (!regex(password)) {
    payload.message = `Invalid format`
  } else {
    payload.valid = true
    payload.value = password
  }

  return payload
}