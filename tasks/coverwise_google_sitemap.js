/*
 * grunt-coverwise-google-sitemap
 * https://github.com/bo.petersen/coverwise-google-sitemap
 *
 * Copyright (c) 2015 Bo Petersen
 * Licensed under the MIT license.
 */

'use strict';
var _ = require('lodash');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('coverwise_google_sitemap', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      urlKey: 'url'
    });


    function findNested(obj, key, memo) {
      if (!_.isArray(memo)) {
        memo = [];
      }
      _.forOwn(obj, function(val, i) {
        if (i === key) {
          memo.push(val);
        } else {
          findNested(val, key, memo);
        }
      });
      return memo;
    }

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      });

      var flat = findNested(JSON.parse(src), 'url');

      // Handle options.
      //src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, JSON.stringify(flat));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
