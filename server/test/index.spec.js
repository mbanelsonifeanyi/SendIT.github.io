import { expect } from 'chai';
import  request  from 'supertest';
import app from '../app';

describe('SendITResources', () => {
    it('should show all parcels in the database', (done) => {
        request(app).get('/').expect(200).end(done)
    });
});