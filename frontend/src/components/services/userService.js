import axios from 'axios';
const BASE_URL_USER = `https://culturalvoyagesl-backend-plcp.onrender.com/user`

//--------------Login Services-------------------------------
export const createUser = async (payload) => {
    console.log(">>>>>", payload);
    try {
        const response = await axios.post(BASE_URL_USER + '/addUser', payload);
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getUserService = async () => {

    try {
        let response = await axios.get(BASE_URL_USER + '/getUser');

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getAllUserService = async () => {

    try {
        let response = await axios.get(BASE_URL_USER + '/getAllUsers');

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const updateUserService = async (payload) => {

    try {
        let response = await axios.post(BASE_URL_USER + '/updateUser', payload);

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const deleteUserService = async (payload) => {
    console.log("pay>>", payload)
    try {
        let response = await axios.post(BASE_URL_USER + '/deleteUser', payload);

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

