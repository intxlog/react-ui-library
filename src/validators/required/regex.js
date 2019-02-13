export default function (string) {
  let re = /^[^\s]+(\s+[^\s]+)*$/
  return re.test(string)
}