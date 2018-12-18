import { describe, it } from 'mocha';
import request from 'supertest';
import app from '../app';

describe('SendItREsources', () => {
  describe('addToSendItResources1234567890', () => {
    it('should add a delivery order to all delvery orders', (done) => {
      request(app)
      .post('/api/v1/parcels')
      .send({ userName: 'time1', userEmail: 'mindegenius123456@gmailom.com',  parcelName: 7 })
      .expect(400)
      .end(done);
    });
  });
  describe('getSpecificSendItResourceByUserId12', () => {
    it('should get the parcels with a specific userId', (done) => {
      request(app).get('/api/parcels/1').expect(404).end(done);
  });
    it('should get the parcels with a specific userId', (done) => {
      request(app).get('/api/parcels/10').expect(404).end(done);
    });
  });
  describe('getSpecificSendItResourceByParcelId123', () => {
    it('should get the parcels with a specific parcelId', (done) => {
      request(app).get('/api/parcels/1').expect(404).end(done);
  });
    it('should get the parcels with a specific parcelId', (done) => {
      request(app).get('/api/parcels/10').expect(404).end(done);
    });
  });
});
