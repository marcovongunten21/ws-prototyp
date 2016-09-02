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
	        style: 'compressed',
	        sourceMap: false
	      },
				files: {
					'css/styles.css' : 'sass/styles.scss'
				}
			}
		},
		watch: {
			css: {
				options: { livereload: true },
				files: 'sass/*.scss',
				tasks: ['sass:dev', 'postcss'],
			}
		},
		postcss: {
      options: {
      	processors: [
      	  require('autoprefixer')(),
      	  require('cssnext')(),
      	  require('precss')()
      	]
      },
      dist: {
      	src: 'css/styles.css',
      	dest: 'css/styles-prefixed.css'
      }
    }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('dist',['sass:dist', 'postcss']);
}
