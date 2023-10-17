import { constant } from "../constants/constants";

const storageToken = constant.LOCAL_STORAGE_TOKEN;
const storageUser = constant.LOCAL_STORAGE_USER;

export const SetTokenLocalStorage = (token) => {
    localStorage.setItem(storageToken, token)
}

export const GetTokenLocalStorage = () => {
    if (localStorage.getItem(storageToken)) {
        return localStorage.getItem(storageToken)
    } else {
        return null;
    }
}

export const SetAuthUserLocalStorage = (user) => {
    localStorage.setItem(storageUser, JSON.stringify(user))
}

export const GetAuthUserLocalStorage = () => {
    if (localStorage.getItem(storageUser)) {
        return JSON.parse(localStorage.getItem(storageUser))
    } else {
        return null;
    }
}


export const EmptyLocalStorage = () => {
    localStorage.removeItem(storageUser)
    localStorage.removeItem(storageToken)
}

