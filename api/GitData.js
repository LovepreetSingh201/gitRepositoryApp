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
        console.error('Axios error details:', error);
        if (error.response) {
            console.error('Response error:', error.response);
        } else if (error.request) {
            console.error('Request error:', error.request);
        } else {
            console.error('General error:', error.message);
        }
        return {}; 
    }
}


export const fetchSearchResult=(query)=>{
    console.log("success");
    return apiCall(`https://api.github.com/search/repositories?q=${query}`)
    
}

export const fetchfavoriteResult=(id)=>{
    return apiCall(`https://api.github.com/repos/${id}`)
}


