var expect = require('chai').expect;
var notAuthMW = require('../../../middleware/generic/notAuth');

describe('notAuth MW', function() {
    it('should call next if there is no userid in session', function(done){
        var reqMock = {
            session: {}
        };
        notAuthMW({})(reqMock,{},function(){
            done();
        });
    });
    it('should call res.redirect if there is a userid in session', function(done){
        var reqMock = {
            session: {
                userid: 'alma'
            }
        };
        var resMock = {
            redirect: function(newurl){
                expect(newurl).be.equal('/rides');
                done();
            }
        }
        notAuthMW({})(reqMock,resMock,function(){
            expect('next should not be called').be.equal(false);
        });
    });
});