export const constant = {
    LOCAL_STORAGE_TOKEN: "Techstack_TOKEN",
    LOCAL_STORAGE_USER: "Techstack_USER",
    LOCAL_STORAGE_EMAIL: "Techstack_EMAIL",
    LOCAL_STORAGE_ROLE: "",
    BASE_URL: "http://127.0.0.1:8000/",
    VER: "/api/v1/",
};
/*
 *  Minimum Error Bounds
 * */

export const minBounds = {
    USERNAME: 3,
    PHONE: 10,
    PASSWORD: 8,
    VERIFICATION_CODE: 5,
    CARDNUMBER: 16,
    CVV: 3,
};

/*
 *  Maximum Error Bounds
 * */

export const maxBounds = {
    USERNAME: 20,
    EMAIL: 255,
    PASSWORD: 255,
    MESSAGE: 255,
    NAME: 25,
};

/*
 *  Validation texts
 * */
export const VALIDATIONS_TEXT = {
    REQUIRED: "Required",
    FIELD_IS_REQUIRED: "This field is required",
    NAME_MAX: "Max length is " + maxBounds.NAME,
    USERNAME_MAX: "Max length is " + maxBounds.USERNAME,
    USERNAME_MIN: "Min length is " + minBounds.USERNAME,
    EMAIL_MAX: "Max length is " + maxBounds.EMAIL,
    PASSWORD_MIN: "Min length is " + minBounds.PASSWORD,
    PASSWORD_MAX: "Max length is " + maxBounds.PASSWORD,
    EMAIL_PATTERN: "Invalid Email format",
    PASSWORD_PATTERN: "Minimum eight characters, at least one letter, one number and one special character",
};

/*
 *  Patterns based Validations
 * */
export const Patterns = {
    Name: /^[A-Za-z][A-Za-z\s]*$/,
    Username: /^[a-zA-Z0-9_-]{3,20}$/,
    Email: /\S+@\S+\.\S+/,
    Password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    Contact: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    ZipCode: /^[0-9]+$/,
    CreditCard: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    number: /^\d*\.?\d{0,2}$/,
    Nondecimal: /^\d+$/,
    percent: /^\d*\.?\d{0,2}$/
}



export const apiUrl = {
    // Auth
    signin: 'login/',
    register: 'register/',
    product: 'product/products/'
};

