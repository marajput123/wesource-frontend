export const emailValidation = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const alphanumericValidation = (value) => {
    let code, i, len;

    for (i = 0, len = value.length; i < len; i++) {
        code = value.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
        }
    }
    return true;
}

export const integerValidation = (value) => {
    if(!isNaN(value) && Number.isInteger(parseFloat(value))){
        return true
    }
    return false
}

export const numericValidation = (value) => {
    if(!isNaN(value)){
        return true
    }
    return false
}