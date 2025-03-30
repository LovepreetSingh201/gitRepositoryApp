import axios from "axios"


const apiCall = async (endpoint, params) => {
    const options = {
        mothod: 'GET',
        url: endpoint,
        params: params ? params : {}
    }
    try {
        const response =await axios.request(options);
        return response.data
    } catch (error) {
        console.log('error',error);
        return {}
    }
}


export const fetchSearchResult=(query)=>{
    return apiCall(`https://api.github.com/search/repositories?q=${query}`)
}
