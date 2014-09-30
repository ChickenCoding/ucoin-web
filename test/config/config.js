var
  should      = require("should")
;

module.exports = function () {
  describe("config", function () {

    it("should assign to an empty json if not exists", function () {
      configData     = require(__dirname + '/../../tools/config')("config.json");
      configData.should.be.ok.and.be.an.Object;
    });

    it("should read config file if exists", function () {
      var
        configFile          = __dirname + '/../../test/fixtures/config.json'
        , configData        = require(__dirname + '/../../tools/config')(configFile)
        , expectedData      = {
          "uchost": "localhost",
          "ucport": 8081,
          "host": "localhost",
          "port": 80,
          "auth": false
        }
      ;

      configData.should.have.properties(expectedData);
    });
  });
};
