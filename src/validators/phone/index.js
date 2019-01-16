import regex from './regex.js'

export default function (phone) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: null
  }

  //make sure the value is in the correct format according to regex
  if (!regex(phone)) {
    payload.message = `Invalid format`
  } else {
    payload.valid = true
    payload.value = phone
  }

  return payload
}