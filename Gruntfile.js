module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
	        style: 'expanded'
	      },
				files: {
					'css/styles.css' : 'sass/styles.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'sass/*.scss',
				tasks: ['sass'],
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);

  grunt.registerTask('minimize', 'Minimize that nice stylesheet', function() {
   	sass: {
			dist: {
				options: {
	        style: 'compressed'
	      },
				files: {
					'css/styles.min.css' : 'sass/styles.scss'
				}
			}
		}
  });

}
