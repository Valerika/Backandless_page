module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/src/main_style.css': 'css/src/main_style.scss'
        }
      }
    },
    cssmin: {
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/dist/style.min.css'
        }
    },
    concat: {
      options: {
        separator: ' '
      },
      css: {
        src: 'css/src/*.css',
        dest: 'css/dist/style.min.css'
      }
    },
    watch: {
      sass: {
        files: 'css/src/*.scss',
        tasks: ['sass','cssmin']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','cssmin','concat','watch']);

};
