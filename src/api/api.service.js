import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_USER = "/api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_USER, data)
}

const updateUserAPI = () => {

}

const getAllUserAPI = () => {
    const URL_USER = "/api/v1/user"
    return axios.get(URL_USER)
}

export {
    createUserAPI, updateUserAPI, getAllUserAPI
}