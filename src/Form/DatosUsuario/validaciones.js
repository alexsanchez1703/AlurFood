export const ValidarEmail = (email) => {
    const length = email.length
    if(length > 8 && length < 50 && email.includes('@')){
        return true
    }else{
        return false
    }
    
}


export const ValidarPassword = (password) => {
    const length = password.length
    if(length >= 8 && length < 20){
        return true
    }else{
        return false
    }
}