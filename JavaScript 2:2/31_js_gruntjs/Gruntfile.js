module.exports = function (grunt) {
  // Do grunt-related things in here

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['js/index.js'],
    },
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['js/index.js'],
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);
};
