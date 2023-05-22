import axios from "axios";
const BASE_URL = `http://localhost:5000/site`


// service for add new site
export const addSiteService = async (site) =>{
    console.log("site>>",site);

    try {
        let response = await axios.post(BASE_URL + '/addSite', site);
        console.log("response>>", response);

        return{
            ok: true,
            data: response.data
        }
    } catch (error) {
        return{
            ok:false,
            error:error
        }
    }
}

// service for get all sites
export const getAllSiteService = async () => {
    try {
        let response = await axios.get(BASE_URL + '/allSites');
        return{
            ok: true,
            data: response.data
        }
    } catch (error) {
        return{
            ok:false,
            error:error
        }
    }
}

// service for view all sites according to site category
export const getSiteCategoryService = async(category)=>{
    try {
        let response = await axios.get(BASE_URL + `/viewSites/${category}`);
        return{
            ok: true,
            data: response.data
        }
    } catch (error) {
        return{
            ok:false,
            error:error
        }
    }
}

// service for for update site
export const updateSiteService = async(id, site)=>{
    console.log("updateService>>",site);
    try {
        let response = await axios.post(BASE_URL + `/updateSite/${id}`,site);
        return{
            ok: true,
            data: response.data
        }
    } catch (error) {
        return{
            ok:false,
            error:error
        }
    }
}

// service for delete site
export const deleteSiteService = async(site)=>{
    console.log("deleteSiteService", site);
    try {
        let response = await axios.delete(BASE_URL + `/deleteSite`,{site});

        return{
            ok: true,
            data: response.data
        }
    } catch (error) {
        return{
            ok:false,
            error:error
        }
    }
}

// service for search site
export const searchSiteService = async(site)=>{
    console.log("search>>",site);
    try {
        let response = await axios.get(BASE_URL + `/searchSite/${site}`);
        return{
            ok: true,
            data: response.data
        }
    } catch (error) {
        return{
            ok:false,
            error:error
        }
    }
}

// service for get one site using id
// export const getOnesiteService = async(id)=>{
//     try {
//         let response = await axios.get(BASE_URL + `/getSite/${id}`);
//         return{
//             ok: true,
//             data: response.data
//         }
//     } catch (error) {
//         return{
//             ok:false,
//             error:error
//         }
//     }
// }