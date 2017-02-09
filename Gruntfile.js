"use strict";

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        less: {
            style: {
                files: {
                    "build/css/style.css": ["less/style.less"]
                }
            }
        },

        cssmin: {
            style: {
                options: {
                    report: "gzip"
                },
                files: {
                    'build/css/style.min.css': ['build/css/style.css']
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ["last 2 versions"]
            },
            style: {
                src: "build/css/style.css"
            }
        },

        copy: {
            build: {
                files: [{
                    expand: true,
                    src: [
                        "fonts/**/*.{woff,woff2}",
                        "images/**",
                        "css/**",
                        "*.html"
                    ],
                    dest: "build"
                }]
            },
            html: {
                files: [{
                    expand: true,
                    src: ["*.html"],
                    dest: "build"
                }]
            }
        },

        imagemin: {
            images: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    src: ["build/images/**/*.{png,jpg,gif}"]
                }]
            }
        },

        concat: {
            dist: {
                src: ['js/jquery-3.1.1.min.js', 'js/bootstrap.min.js', 'js/countUp.js', 'js/main.js'],

                dest: 'build/js/production.min.js',
            },
        },

        uglify: {
            my_target: {
                files: {
                    'build/js/production.min.js': ['build/js/production.min.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['copy', 'less', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin']);
};
