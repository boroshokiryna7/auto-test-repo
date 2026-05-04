import axios from 'axios';

export async function getUser(userId) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
}

export async function getUserPosts(userId) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data;
}

export async function createPost(title, body, userId) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: userId
    });
    return response.data;
}


export async function updatePost(postId, title, body) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        title: title,
        body: body
    });
    return response.data;
}


export async function deletePost(postId) {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.status === 200;
}
