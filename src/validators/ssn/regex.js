export default function (string) {
  let re =  /^[0-9]{3}\-[0-9]{2}\-[0-9]{4}$|(^[0-9]{9}$)/
  return re.test(string)
}
