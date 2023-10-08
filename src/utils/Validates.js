export const checkValidation = (email,password) =>{
    const isemailid =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi.test(email)
    const ispassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gi.test(password)
    if(!isemailid)return'email id not valid';
    if(!ispassword)return'password is not valid';
    return null;
}
