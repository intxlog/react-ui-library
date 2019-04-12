export default function (string) {
  let re =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[[\]\!@#-_+|~`/$:;%^&*=()+<>?{}])(?!.*\s).{8,16}$/
  return re.test(string)
}
