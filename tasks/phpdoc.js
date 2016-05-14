/*
 * grunt-phpdoc
 * https://github.com/chrisklaussner/grunt-phpdoc
 *
 * Copyright (c) 2015 Christian Klaussner
 * Licensed under the MIT license
 */

'use strict';

var exec = require('child_process').exec;

module.exports = function(grunt) {
  var desc = 'Create documentations for PHP code with phpDocumentor';

  grunt.registerMultiTask('phpdoc', desc, function() {
    var options, done, todo;

    function build(src, dest, last) {

      // Create parameters for files and directories
      var dirs = '', files = '';

      src.forEach(function(path) {
        if (grunt.file.isDir(path)) {
          dirs += ' -d "' + path + '"';
        } else if (grunt.file.isFile(path)) {
          files += ' -f "' + path + '"';
        }
      });

      // Build command with all parameters
      var cmd = 'phpdoc';

      if (dest) {
        cmd += ' -t "' + dest + '"';
      } else {
        cmd += ' -t doc';
      }

      cmd += dirs;
      cmd += files;

      cmd += ' --template="' + options.template + '"';

      // Execute phpdoc process
      exec(cmd, function(error, stdout, stderr) {
        if (error != null) {
          grunt.fail.fatal(error);
        }

        if (stderr.length > 0) {
          var msg = 'Failed to execute phpdoc:\n' + stderr;
          grunt.fail.fatal(msg);
        }

        if (options.verbose) {
          grunt.log.write(stdout);
        }

        if (last) {
          done();
        }
      });
    }

    // Initialize options with default values
    options = this.options({
      template: 'clean',
      verbose: false
    });

    // Build one documentation for each file entry
    done = this.async();
    todo = this.files.length;

    if (todo === 0) {
      grunt.fail.warn('No input files.');
    }

    this.files.forEach(function(file) {
      build(file.src, file.dest, --todo === 0);
    });
  });
};
