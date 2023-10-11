export const checkValidEmail = (email) => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const isValidEmail = emailRegex.test(email)
    if(!isValidEmail && email.length > 0){
        return "Email ID is not valid"
    }
    else{
        return null
    }
}

export const checkValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const isValidPassword = passwordRegex.test(password)
    if(!isValidPassword && password.length > 0){
        return "Please Input a Valid Password"
    }
    else{
        return null
    }
}

export const checkValidation = (email, password) => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const isValidEmail = emailRegex.test(email)
    const isValidPassword = passwordRegex.test(password)

    if(!isValidEmail) return "Email Id is not Valid"
    if(!isValidPassword) return "Password is not Vlaid"

    return null
}