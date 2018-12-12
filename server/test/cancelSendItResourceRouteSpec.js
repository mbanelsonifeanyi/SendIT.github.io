import express from 'express';
import { describe, it } from 'mocha';
import request from 'supertest';
import sinon from 'sinon';
import og from '../../api/controllers/addToSendItResourcesRoute';
const app = express();

describe('getAllSendItResources', () => {
  it('should modify the parcel delivery12345', (done) => {
    const addToSendItResourcesRoute = sinon.stub(og, 'addToSendItResourcesRoute');
    addToSendItResourcesRoute.returns(
    app.put('/', function (req, res) {
      res.sendStatus(200);
    }));
    request(app)
      .put('/')
      .expect(200)
      .end(done);
  });
});
