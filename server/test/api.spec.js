import request from  'supertest'
import { expect }  from 'chai'
import app from '../app';
describe( 'SendITResources', ( ) => { 
    it( 'should show all parcels in the database', ( done ) => {
        request( app ).get('/api/parcels').expect( 200 ).end( done )
    } )
    it( 'should get the parcels with a specific parcelId', ( done ) => {
        request( app ).get('/api/parcels/1').expect( 200 ).end( done )
    } )
    it('should return a status code of 404 for an invalid parcelId', (done) =>{
        request(app).get('/api/parcels/87').expect(404).end(done);
    })
    it( 'should get the parcels with a specific userId', ( done ) => {
        request( app ).get('/api/users/1/parcels').expect( 200 ).end( done )
    } )
    it('Should return status of 404 for a wrong User Id', (done) => {
        request(app).get('/api/users/999/parcels').expect(404).end(done)
    })
    it( 'should add a delivery order to all delvery orders', ( done ) => {
        request( app )
        .post('/api/parcels')
        .send( { userName: 'something1', userEmail: 'time1', parcelName:'jjj' } )
        .expect( 201 )
        .end( done )
    } )
    it ('Should return errors for empty post fields', (done) => {
        request(app).post('/api/parcels').expect(400).end(done);
    })
    it( 'should modify the status of a delivery order', ( done ) => {
        request( app )
        .put('/api/parcels/1/cancel')
        .expect( 200 )
        .end( done )
    } )
    it('Should return status of 404 for an wrong parcel Id', (done) => {
        request(app).put('/api/parcels/98/cancel').expect(404).end(done);
    })
    
})