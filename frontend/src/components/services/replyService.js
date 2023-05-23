import axios from 'axios';
const BASE_URL = `https://culturalvoyagesl-backend-plcp.onrender.com/reply`

export const getPostReplyService = async (id) => {

    try {
        let response = await axios.get(BASE_URL + `/view/${id}`);

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
export const addReplyService = async (newReply) => {

    try {
        let response = await axios.post(BASE_URL + '/add',newReply);

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

// export const updateProductService = async (newProduct) => {

//     try {
//         let response = await axios.post(BASE_URL + '/update',newProduct);

//         return {
//             ok: true,
//             data: response.data
//         }
//     } catch (error) {
//         return {
//             ok: false,
//             error: error
//         }
//     }

// }

// export const sellerProductsService = async (id) => {

//     try {
//         let response = await axios.post(BASE_URL + `/sellerProducts/${id}`);

//         return {
//             ok: true,
//             data: response.data
//         }
//     } catch (error) {
//         return {
//             ok: false,
//             error: error
//         }
//     }

// }

// export const deleteProductsService = async (id) => {

//     try {
//         let response = await axios.post(BASE_URL + `/deleteProducts/${id}`);

//         return {
//             ok: true,
//             data: response.data
//         }
//     } catch (error) {
//         return {
//             ok: false,
//             error: error
//         }
//     }

// }
