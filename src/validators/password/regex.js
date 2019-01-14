export default function (string) {

   //1st character = letter, 4-15 characters, just letters, numbers and underscore
   //let re = /^[a-zA-Z]\w{3,14}$/

   //Must contain a capital letter
    let re = /^[A-Z]/
    return re.test(string)
  }