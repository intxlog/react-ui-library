export default function (val) {
  //declare a return object
  let payload = {
    valid: false,
    message: null,
    value: val
  }

  //make sure the value is not blank
  if (val === null || val === '') {
    payload.message = `Field is required`
  } else {
    payload.valid = true
    payload.value = val
  }

  return payload
}