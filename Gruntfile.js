module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dev: {
				options: {
	        style: 'expanded'
	      },
				files: {
					'css/styles.css' : 'sass/styles.scss'
				}
			},
			dist: {
				options: {
	        style: 'minified'
	      },
				files: {
					'css/styles.css' : 'sass/styles.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'sass/*.scss',
				tasks: ['sass:dev'],
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
