module.exports = function(grunt) {
  grunt.initConfig({
     uglify: {
        'dist/ng-currency-input.min.js': 'src/ng-currency-input.js'
     }
  });
 
  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);

};