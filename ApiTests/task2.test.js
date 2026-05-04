import { buildRequest, getPostWithCustomHeaders } from './task2.js';

describe('Request with headers and Params', () => {
    
    it('should include params in request', () => {
        const request = buildRequest(
            'https://jsonplaceholder.typicode.com/posts',
            { id: 1 },
            {}
        );
        
        expect(request.params).toEqual({ id: 1 });
        expect(request.params.id).toBe(1);
    });

    it('should include custom headers in request', () => {
        const request = buildRequest(
            'https://jsonplaceholder.typicode.com/posts',
            {},
            { 'Authorization': 'Bearer token' }
        );
        
        expect(request.headers['Authorization']).toBe('Bearer token');
    });

    it('should include both params and headers', () => {
        const request = buildRequest(
            'https://jsonplaceholder.typicode.com/posts',
            { id: 1, limit: 10 },
            { 'X-Custom': 'value' }
        );
        
        expect(request.params.id).toBe(1);
        expect(request.params.limit).toBe(10);
        expect(request.headers['X-Custom']).toBe('value');
    });

    it('should merge multiple headers', () => {
        const request = buildRequest(
            'https://jsonplaceholder.typicode.com/posts',
            {},
            {
                'Authorization': 'Bearer xyz',
                'Content-Type': 'application/json',
                'X-Request-ID': '12345'
            }
        );
        
        expect(request.headers['Authorization']).toBe('Bearer xyz');
        expect(request.headers['Content-Type']).toBe('application/json');
        expect(request.headers['X-Request-ID']).toBe('12345');
    });

    it('should work with real API call', async () => {
        const result = await getPostWithCustomHeaders(1, { 'X-Custom': 'test' });
        
        expect(result).toBeDefined();
        expect(result[0].id).toBe(1);
    });
});
