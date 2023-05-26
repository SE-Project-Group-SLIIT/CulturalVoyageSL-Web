import axios from 'axios';
const BASE_URL = `https://culturalvoyagesl-backend-plcp.onrender.com/post`

export const getAllPostService = async () => {

    try {
        let response = await axios.get(BASE_URL + '/view');
        return {
            ok: true,
            data: response.data.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const addPostService = async (newPost) => {
    console.log(newPost)
    try {
        let response = await axios.post(BASE_URL + '/add', newPost);
        return {
            ok: true,
            data: response.data.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}
export const getPostsBySearch = async (searchData) => {

    try {
        let response = await axios.post(BASE_URL + '/search', searchData, {
            headers: {
              'Content-Type': 'application/json',
            }
        },);

        return {
            ok: true,
            data: response.data.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}
