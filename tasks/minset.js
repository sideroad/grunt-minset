/*
 * grunt-minset
 * https://github.com/sideroad/grunt-minset
 *
 * Copyright (c) 2013 sideroad
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');

  grunt.registerMultiTask('minset', 'Set minify configure as uglify automatically.', function() {

    var options = this.options({
          min: 'uglify',
          from: /\.unpack\.js$/,
          to: '.js'
        }),
        min = grunt.config.get(options.min);

    min.minset = {
      files: {}
    };

    this.files.forEach(function(f) {

      f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
        } else {
          min.minset.files[path.resolve(f.dest, path.basename(filepath).replace(options.from, options.to))] = [filepath];
        }
      });
    });

    grunt.config.set(options.min, min);

  });

};
