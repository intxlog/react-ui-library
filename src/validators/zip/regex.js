export default function (string) {
    let re =  /^[0-9]{5}$/
    return re.test(string)
}