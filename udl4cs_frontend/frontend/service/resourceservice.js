import axios from "axios";
//
// const RESOURCE_API_REST_URL = "http://localhost:8080/resources";
//
// class APIService {
//     getAllResources() {
//         return axios.get(RESOURCE_API_REST_URL);
//     }
// }
//
// export default new APIService();

const axiosClient = axios.create();
axiosClient.defaults.baseUrl = "http://localhost:8080"
export async function getRequest(URL) {
    const response = await axiosClient.get(URL)
        .then(response=>response)
        .catch(err=>console.log(err))
    return response.data
}

export async function postRequest(URL, payload) {
    const response = await axiosClient.post(URL, payload).then(response=>response).catch(err=>console.log(err))
    return response
}

export async function putRequest(URL, payload) {
    const response = await axiosClient.put(URL, payload).then(response=>response).catch(err=>console.log(err))
    return response
}

export async function deleteRequest(URL, payload) {
    const response = await axiosClient.delete(URL, payload).then(response=>response).catch(err=>console.log(err))
    return response
}