/**
 * Created by Thomas on 5/2/2017.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var chould = chai.should();

chai.use(chaiHttp);

describe('Hello', function(){
    it('GET /api/v1/hello', function(done){
        chai.request(server)
            .get('/api/v1/hello')
            .end( function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
        });
    });
});