'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.minset = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  main: function(test) {
    test.expect(2);

    var actual;
    var expected;
    actual = grunt.file.read('tmp/a.js');
    expected = grunt.file.read('test/expected/a.js');
    test.equal(actual, expected, 'should be minified a.unpack.js');

    actual = grunt.file.read('tmp/b.js');
    expected = grunt.file.read('test/expected/b.js');
    test.equal(actual, expected, 'should be minified b.unpack.js');

    test.done();
  }
};
