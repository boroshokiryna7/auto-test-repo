import axios from 'axios';
export async function getPostWithCustomHeaders(postId, customHeaders = {}) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    const params = { id: postId };
    const headers = {
        'Authorization': 'Bearer mytokens',
        ...customHeaders
    };
    
    const response = await axios.get(url, {
        params: params,
        headers: headers
    });
    
    return response.data;
}

export function buildRequest(url, params, headers) {
    return {
        url: url,
        params: params,
        headers: headers
    };
}
