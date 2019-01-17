export default function (string) {
<<<<<<< HEAD

    let re =  /^\d{5}$|^\d{5}\-\d{4}$/

=======
    let re =  /^[0-9]{5}$/
>>>>>>> develop
    return re.test(string)
}