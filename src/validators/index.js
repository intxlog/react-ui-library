import email from './email'
import zip from './zip'
<<<<<<< HEAD
=======
import phone from './phone'
import ein from './ein'
import ssn from './ssn'
>>>>>>> develop

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
    case `zip`:
      payload = zip(value)
      break
<<<<<<< HEAD
=======
    case `phone`:
      payload = phone(value)
      break
    case `ein`:
      payload = ein(value)
      break
    case `ssn`:
      payload = ssn(value)
      break
>>>>>>> develop
    default: //no conditions were met so we are going to return valid
      payload.valid = true
      break
  }

  return payload
}