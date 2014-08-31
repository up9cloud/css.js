/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        banner: '/*! <%= package.name %> - v<%= package.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* http://<%= package.repository.url %>/\n' +
                '* Copyright (c) 2013-<%= grunt.template.today("yyyy") %> <%= package.author %>; Licensed <%= package.license %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/$css.min.js'
            }
        },
        uglify: {
            my_target: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    '<%= concat.dist.dest %>': ['<%= concat.dist.dest %>']
                }
            }
        },
        copy: {
            cssjs:{
                files: [
                    {expand: true, cwd: 'dist/', src: ['**'], dest: 'demo/'}
                ]
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS:true,
                    minifyCSS:true
                },
                files: {
                    'demo/index.html': 'src/demo.html'
                }
            }
        },
        watch: {
            js: {
                files: '<%= concat.dist.src %>',
                tasks: ['build'],
            },
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', [ 'build']);
    grunt.registerTask('dev', [ 'build', 'watch']);
    grunt.registerTask('build', [ 'minifyJS','htmlmin','copy']);
    grunt.registerTask('minifyJS', [ 'concat', 'uglify']);

};
