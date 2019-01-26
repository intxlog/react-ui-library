import regex from './regex.js'

export default function (ssn) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: null
  }

  //make sure the value is in the correct format according to regex
  if (!regex(ssn)) {
    payload.message = `Invalid format`
  } else {
    payload.valid = true
    payload.value = ssn
  }
  return payload
}
