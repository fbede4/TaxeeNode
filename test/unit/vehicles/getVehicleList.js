var expect = require('chai').expect;
var getVehicleListMW = require('../../../middleware/vehicles/getVehicleList');

describe('getVehicleListMW ', function () {

  it('should return vehicles', function (done) {
    var reqMock = {
        session: {
            userid: 'alma'
        }
    };
    var res = {
      tpl: {}
    };
    var vehicleModelMock = {
      find: function (some, cb) {
        cb(undefined, ['vehicle1', 'vehicle2'])
      }
    };

    getVehicleListMW({
      vehicleModel: vehicleModelMock
    })(reqMock, res, function (err) {
      expect(res.tpl.vehicles).to.eql(['vehicle1', 'vehicle2']);
      expect(err).to.eql(undefined);
      done();
    });
  });

  it('should return error when db returns error', function (done) {
    var reqMock = {
        session: {
            userid: 'alma'
        }
    };
    var vehicleModelMock = {
      find: function (some, cb) {
        cb('hiba', undefined)
      }
    };

    getVehicleListMW({
        vehicleModel: vehicleModelMock
    })(reqMock, {}, function (err) {
      expect(err).to.eql('hiba');
      done();
    });
  });

  it('should return error when there is no userid in session', function (done) {
    var reqMock = {
        session: {
        }
    };
    var vehicleModelMock = {
      find: function (some, cb) {
        cb('hiba', undefined)
      }
    };

    getVehicleListMW({
        vehicleModel: vehicleModelMock
    })(reqMock, {}, function (err) {
      expect(err).to.eql('hiba');
      done();
    });
  });
});