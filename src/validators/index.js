import email from './email'

export default function (value, type) {
  let payload = {
    valid: false,
    message: null,
    value: null
  }

  //run a switch statement to check for types
  switch (type) {
    case `email`:
      payload = email(value)
      break
    default: //no conditions were met so we are going to return valid
      payload.valid = true
      break
  }

  return payload
}