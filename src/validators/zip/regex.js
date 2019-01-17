export default function (string) {
  let re =  /^\d{5}$|^\d{5}\-\d{4}$/
  return re.test(string)
}