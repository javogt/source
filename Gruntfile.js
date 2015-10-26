module.exports = function(grunt) {

	grunt.initConfig({

		concat: {
			dist: {
				src: 'css/*.css',
				dest: 'concat.css',
			},
		},

		postcss: {
			options: {
				processors: [
					require('postcss-calc')(),
					require('postcss-custom-properties')(),
					require('autoprefixer')()
				]
			},
			dist: {
				src: 'concat.css',
				dest: 'main.css'
			}
		}

	});

	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('css', ['concat', 'postcss']);

};