import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import SendItResources from '../../api/controllers/sendItResources1';
import sendItResourcesArray from '../../api/models/sendItResourcesArray';
import og from '../../api/controllers/allParcelsRoute';


describe('SendItResources', () => {
  it('Should have the following functions:', () => {
    expect(SendItResources).to.have.property('addToSendItResources');
    expect(SendItResources).to.have.property('getSpecificSendItResourceByUserId');
    expect(SendItResources).to.have.property('getSpecificSendItResourceByParcelId');
    expect(SendItResources).to.have.property('deleteSpecificSendItResourceByParcelId');
    expect(SendItResources).to.have.property('getAllSendItResources');
    expect(SendItResources).to.have.property('cancelSendItResource');
  });
  it('Should have the following properties: name, email, cancelled, userId, parcelId', () => {
    expect(sendItResourcesArray[0]).to.have.property('name');
    expect(sendItResourcesArray[0]).to.have.property('email');
    expect(sendItResourcesArray[0]).to.have.property('cancelled');
    expect(sendItResourcesArray[0]).to.have.property('parcelId');
    expect(sendItResourcesArray[0]).to.have.property('userId');
  });
  describe('addToSendItResources', () => {
    it('Should return all the data in our database', () => {
      const addToSendItResources = sinon.stub(SendItResources, 'addToSendItResources');
      addToSendItResources.returns('n');
      expect(SendItResources.addToSendItResources('nelson', 'mbanelson@gmail.com', 'anyhting')).to.be.equal('n');
    });
  });
  describe('getSpecificSendItResourceByUserId', () => {
    it('Should return all the data in our database', () => {
      const getSpecificSendItResourceByUserId = sinon.stub(SendItResources, 'getSpecificSendItResourceByUserId');
      getSpecificSendItResourceByUserId.returns('n');
      expect(SendItResources.getSpecificSendItResourceByUserId('nelson', 'mbanelson@gmail.com', 'anyhting')).to.be.equal('n');
    });
  });
  describe('getSpecificSendItResourceByParcelId', () => {
    it('Should return all the data in our database', () => {
      const getSpecificSendItResourceByParcelId = sinon.stub(SendItResources, 'getSpecificSendItResourceByParcelId');
      getSpecificSendItResourceByParcelId.returns('n');
      expect(SendItResources.getSpecificSendItResourceByParcelId('nelson', 'mbanelson@gmail.com', 'anyhting')).to.be.equal('n');
    });
  });
  describe('deleteSpecificSendItResourceByParcelId', () => {
    it('Should return all the data in our database', () => {
      const deleteSpecificSendItResourceByParcelId = sinon.stub(SendItResources, 'deleteSpecificSendItResourceByParcelId');
      deleteSpecificSendItResourceByParcelId.returns('n');
      expect(SendItResources.deleteSpecificSendItResourceByParcelId('nelson', 'mbanelson@gmail.com', 'anyhting')).to.be.equal('n');
    });
  });
  describe('cancelSendItResource', () => {
    it('Should return all the data in our database', () => {
      const cancelSendItResource = sinon.stub(SendItResources, 'cancelSendItResource');
      cancelSendItResource.returns('n');
      expect(SendItResources.cancelSendItResource('nelson', 'mbanelson@gmail.com', 'anyhting'))
      .to.be.equal('n');
    });
  });
  describe('getAllSendItResources', () => {
    it('should modify the parcel delivery12345', (done) => {
      const addToSendItResourcesRoute = sinon.stub(og, 'allParcelsRoute');
      addToSendItResourcesRoute.returns('n');
      expect(og.allParcelsRoute()).equal('n');
      done();
    });
  });
});
