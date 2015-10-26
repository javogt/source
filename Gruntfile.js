module.exports = function(grunt) {

	grunt.initConfig({

		postcss: {

			options: {
				processors: [
					require('autoprefixer')()
				]
			},
			dist: {
				src: 'css/style.css',
				dest: 'main.css'
			}

		}

	});

	grunt.loadNpmTasks('grunt-postcss');

};