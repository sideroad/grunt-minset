/*
 * grunt-minset
 * https://github.com/sideroad/grunt-minset
 *
 * Copyright (c) 2013 sideroad
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path'),
      index = 0;

  grunt.registerMultiTask('minset', 'Set minify configure as uglify automatically.', function() {

    var options = this.options({
          config: 'uglify',
          from: /\.unpack\.js$/,
          to: '.js',
          divide: 10
        }),
        cnt = 0,
        min = grunt.config.get(options.config),
        divide = options.divide;

    if(!min['minset-'+index]) {
      min['minset-'+index] = {files: {}};
    }

    this.files.forEach(function(f) {
      f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
        } else {
          if(divide <= cnt){
            index++;
            min['minset-'+index] = {files: {}};
            cnt = 0;
          }
          min['minset-'+index].files[path.resolve(f.dest, path.basename(filepath).replace(options.from, options.to))] = [filepath];
          cnt++;
        }
      });
    });
    index++;

    grunt.config.set(options.config, min);

  });

};
