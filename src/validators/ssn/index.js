import regex from './regex.js'

export default function (ssn) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: null
  }

  console.log("GETTING LENGTH: " + ssn.length)

  var newVal = '';
  if(ssn.length > 4) {

  }
  if((ssn.length > 3) && (ssn.length < 6)) {
     newVal += ssn.substr(0, 3) + '-';
     ssn = ssn.substr(3);
     console.log("GETTING SSN: " + ssn)
     console.log("GETTING NEW VALUE " + newVal)
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
