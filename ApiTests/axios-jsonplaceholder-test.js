
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function runTests() {
  try {
    const res1 = await axios.get(`${BASE_URL}/posts/1`);
    console.log('GET /posts/1 status:', res1.status);
    if (res1.status !== 200) throw new Error('Status not 200');
    if (!res1.data || res1.data.id !== 1) throw new Error('Data incorrect');
    console.log('GET /posts/1 data OK');
  } catch (e) {
    console.error('GET /posts/1 failed:', e.message);
  }
  try {
    const res2 = await axios.get(`${BASE_URL}/users/1`);
    console.log('GET /users/1 status:', res2.status);
    if (res2.status !== 200) throw new Error('Status not 200');
    if (!res2.data || res2.data.id !== 1) throw new Error('Data incorrect');
    console.log('GET /users/1 data OK');
  } catch (e) {
    console.error('GET /users/1 failed:', e.message);
  }

  try {
    const postData = { title: 'food', body: 'bar', userId: 1 };
    const res3 = await axios.post(`${BASE_URL}/posts`, postData);
    console.log('POST /posts status:', res3.status);
    if (res3.status !== 201) throw new Error('Status not 201');
    if (!res3.data || res3.data.title !== postData.title) throw new Error('Data incorrect');
    console.log('POST /posts data OK');
  } catch (e) {
    console.error('POST /posts failed:', e.message);
  }

  try {
    const res4 = await axios.get(`${BASE_URL}/comments`, { params: { postId: 1 } });
    console.log('GET /comments?postId=1 status:', res4.status);
    if (res4.status !== 200) throw new Error('Status not 200');
    if (!Array.isArray(res4.data) || res4.data.length === 0) throw new Error('Data incorrect');
    console.log('GET /comments?postId=1 data OK');
  } catch (e) {
    console.error('GET /comments?postId=1 failed:', e.message);
  }

  try {
    const commentData = { postId: 1, name: 'test', email: 'test@example.com', body: 'test comment' };
    const res5 = await axios.post(`${BASE_URL}/comments`, commentData);
    console.log('POST /comments status:', res5.status);
    if (res5.status !== 201) throw new Error('Status not 201');
    if (!res5.data || res5.data.body !== commentData.body) throw new Error('Data incorrect');
    console.log('POST /comments data OK');
  } catch (e) {
    console.error('POST /comments failed:', e.message);
  }
}

runTests();
