import regex from './regex.js'

export default function (email) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: null
  }

  //first cast the value to lowercase
  email = String(email).toLowerCase()

  //make sure the value is not blank
  if (email === null || email === '') {
    payload.message = `Cannot be blank`
  } else if (!regex(email)) {
    payload.message = `Invalid format`
  } else {
    payload.valid = true
    payload.value = email
  }

  return payload
}