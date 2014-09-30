var
  supertest     = require("supertest")
  , should      = require("should")
  , express     = require("express")
;

module.exports = function () {
  describe("smoke", function () {
    it("should not smoke", function () {
      var smoke = 1;
      smoke.should.be.exactly(1);
    });
  });

  describe("app", function () {
    var self = this;

    before(function () {
      self.app = express();
    });

    it("should connect", function (done) {
      self.app.use(function (req, res) {
        res.end();
      });
      self.app.listen(0, function () {
        supertest(self.app)
          .get("/")
          .expect(200, done);
      });
    });
  });
};

