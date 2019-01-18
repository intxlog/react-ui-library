import regex from './regex.js'

export default function (zip) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: null
  }

  //make sure the value is in the correct format according to regex
  if (!regex(zip)) {
    payload.message = `Invalid format`
  } else {
    payload.valid = true
    payload.value = zip
  }

  return payload
}