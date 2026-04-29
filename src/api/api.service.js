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

const updateUserAPI = (_id, fullName, phone) => {
    const URL_USER = "/api/v1/user"
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_USER, data)
}

const getAllUserAPI = () => {
    const URL_USER = "/api/v1/user"
    return axios.get(URL_USER)
}

export {
    createUserAPI, updateUserAPI, getAllUserAPI
}