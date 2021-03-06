import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test API', () => {
  describe('GET /', () => {
    it('Should return 200 for getting all centers', (done) => {
      chai.request(app)
        .get('/api/v1/center')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
    it('Should return 200 for getting individual center', (done) => {
      chai.request(app)
        .get('/api/v1/center/1')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
    it('Should return an object', (done) => {
      chai.request(app)
        .get('/api/v1/center')
        .end((err, res) => {
          expect(res.body).to.have.property('status').equal('success');
          done();
        });
    });

    it('Should return 200 for the default route', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    // Test for undefined routes
    it('Undefined Routes Should Return 404', (done) => {
      chai.request(app)
        .post('/another/undefined/route')
        .send({ random: 'random' })
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
  describe('API to update center', () => {
    it('Should return 200 if successful', (done) => {
      chai.request(app)
        .put('/api/v1/center/1')
        .send({
          capacity: 500,
          location: 'Lagos',
          features: 'some feature',
          description: 'Lorem Ipusm Dolor'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('status').equal('success');
          done();
        });
    });
  });
  describe('POST event', () => {
    it('Should return 400 for post without event title', (done) => {
      chai.request(app)
        .post('/api/v1/event')
        .send({
          id: 6,
          userId: 12,
          date: '10/11/18',
          time: '10:00:am',
          venue: 'Yaba',
          details: 'Lorem Ipsum'
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});
describe('API to update event', () => {
  it('Should return 200 if successful', (done) => {
    chai.request(app)
      .put('/api/v1/event/1')
      .send({
        title: 'Some Title',
        date: '10/11/18',
        time: '10:00:am',
        venue: 'Yaba',
        details: 'Lorem Ipsum'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status').equal('success');
        done();
      });
  });
});


describe('API delete event', () => {
  it('Should return 200 for succesful delete request ', (done) => {
    chai.request(app)
      .delete('/api/v1/event/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('Should return 404 if parameter is not found', (done) => {
    chai.request(app)
      .delete('/api/v1/event/')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

