import { FetchBadURL } from './task1.js';

describe('FetchBadURL', () => {
    it('should handle error and return error status 404', async () => {
        const result = await FetchBadURL();
        expect(result.success).toBe(false);
        expect(result.status).toBe(404);
        expect(result.message).toContain('Error Status: 404');
    });

    it('should return an error message when request fails', async () => {
        const result = await FetchBadURL();
        expect(result.message).toBeDefined();
        expect(typeof result.message).toBe('string');
    });

    it('should have success property set to false on error', async () => {
        const result = await FetchBadURL();
        expect(result.success).toBe(false);
    });
});
