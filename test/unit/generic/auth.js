var expect = require('chai').expect;
var authMW = require('../../../middleware/generic/auth');

describe('auth MW', function() {
    it('should call next if there is a userid in session', function(done){
        var reqMock = {
            session: {
                userid: 'alma'
            }
        };
        authMW({})(reqMock,{},function(){
            done();
        });
    });
    it('should call res.redirect if there is no userid in session', function(done){
        var reqMock = {
            session: {}
        };
        var resMock = {
            redirect: function(newurl){
                expect(newurl).be.equal('/login');
                done();
            }
        }
        authMW({})(reqMock,resMock,function(){
            expect('next should not be called').be.equal(false);
        });
    });
});