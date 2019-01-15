export default function (string) {
    let re = /^[0-9]{2}\-?[0-9]{7}$/
    return re.test(string)
  }