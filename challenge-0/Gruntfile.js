module.exports = function (grunt) {

require('load-grunt-tasks')(grunt);
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['./js/*.js']
        },

        uglify: {
            my_target: {
                files: {
                    './js/challenge.min.js': './js/challenge.js'
                }
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    './css/c0.css': './scss/c0.scss'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['./css/c0.css', '!*.min.css'],
                    ext: '.min.css'
                        }]
            }
        },

        browserSync: {
            bsFiles: {
                src: 'css/*.css'
            },
            options: {
                 port: 8000,
                server: {
                    baseDir: './'
                }
            }
        },

        watch: {
            scripts: {
                files: ['./*.html', './scss/c0.scss'],
                tasks: ['uglify', 'cssmin', 'sass', 'watch'],
                options: {
                    event: 'all', 
                    livereload: true
                },
            },
        },


    });



    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'sass', 'browserSync', 'watch' ]);


};