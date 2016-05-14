'use strict';

var grunt = require('grunt');

exports.phpdoc = {
  setUp: function(done) {
    done();
  },

  test: function(test) {
    test.expect(1);

    var index = grunt.file.exists('tmp/index.html');
    test.ok(index);

    test.done();
  }
};
