/**
 * Created by kaizzige on 1/11/15.
 */

module.exports = function (grunt) {
    // Grunt init Config
    grunt.initConfig({
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        'public/lib/angular/angular.js',
                        'public/lib/angular-mocks/angular-mocks.js',
                        'public/modules/**/*.js'
                    ]
                }
            }
        },

        watch: {
            dev: {
                files: [
                    'public/modules/**/*.js', 'public/modules/**/*.less', 'public/modules/**/*.html'
                ],
                tasks: ['develop'],
                options: {nospawn: true}
            },
            test: {
                files: [
                    'public/modules/**/*.tests.js'
                ],
                tasks: ['karma'],
                options: {nospawn: true}
            }
        },

        develop: {
            server: {
                file: 'static.js'
                //nodeArgs: ['--debug'],            // optional
                //args: ['appArg1', 'appArg2'],    // optional
                //env: { NODE_ENV: 'development' }
            }
        }
    });

    // Grunt Load NPM tasks
    require('load-grunt-tasks')(grunt);

    // Grunt Register tasks
    grunt.registerTask('default', ['karma', 'watch:dev']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('build-test', ['watch:test']);


}
