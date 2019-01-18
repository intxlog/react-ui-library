export default function (string) {
  let re =  /^\d{3}\-\d{2}\-\d{4}$/
  return re.test(string)
}
