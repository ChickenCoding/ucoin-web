var
  fs = require('fs')
;

module.exports = function (fileName) {
  return fs.existsSync(fileName) ?
    JSON.parse(fs.readFileSync(fileName, 'utf8')) :
    {}
  ;
};
