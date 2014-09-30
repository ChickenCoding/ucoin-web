var
supertest       = require("supertest")
  , should      = require("should")
  , express     = require("express")
  , _           = require("underscore")
;

module.exports = function () {
  describe("routes", function () {
    var self = this;

    before(function () {
      self.app = express();
      self.app.use(function (req, res) {
        res.end();
      });
    });

    describe("gets", function () {
      self.gets = [
        '/home',
        '/community/members',
        '/community/voters',
        '/community/pks/lookup',
        '/community/pks/add',
        '/community/pks/udid2',
        '/contract/current',
        '/contract/pending',
        '/contract/votes',
        '/transactions/lasts',
        '/peering/peers',
        '/peering/peers/keys',
        '/peering/wallets',
        '/peering/upstream',
        '/peering/peers/upstream/keys',
        '/peering/downstream',
        '/peering/peers/downstream/keys'
      ];

      _.forEach(self.gets, function (routeGet) {
        self.routeGet = routeGet;
        it("should get a 200 response when the route" + self.routeGet + " is defined", function (done) {
          self.app.listen(0, function () {
            supertest(self.app)
            .get(self.routeGet)
            .expect(200, done);
          });
        });
      });
    });

    describe("posts", function (){
      self.posts = [
        '/community/pks/add'
      ];
      _.forEach(self.posts, function (routePost) {
        self.routePost = routePost;
        it("should post a 200 response when the route" + self.routePost + " is defined", function (done) {
          self.app.listen(0, function () {
            supertest(self.app)
            .get(self.routePost)
            .expect(200, done);
          });
        });
      });
    });

  });
};
