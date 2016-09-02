module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ['sass/**/*.{scss,sass}'],
				tasks: ['sass:dev']
			},
			livereload: {
				files: ['*.html', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			dev: {
				options: {
					sourceMap: true,
					outputStyle: 'expanded'
				},
				files: {
					'css/styles.css': 'sass/styles.scss'
				}
			},
			dist: {
				options: {
					sourceMap: false,
					outputStyle: 'compressed'
				},
				files: {
					'css/styles.css': 'sass/styles.scss'
				}
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
      	dest: 'css/styles.css'
      }
    }
	});
	grunt.registerTask('default', ['sass:dev', 'watch']);
	grunt.registerTask('dist', ['sass:dist', 'postcss:dist']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
