export function EmailValid(emailString){
    const emailFixed = emailString.replace(/[\s]/g, "")
    this.email = emailFixed.match(/...(?<=@)/)[0]
    console.log(this.email)
}