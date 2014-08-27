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
        watch: {
            js: {
                files: '<%= concat.dist.src %>',
                tasks: ['minify'],
            },
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', [ 'minify']);
    grunt.registerTask('dev', [ 'minify', 'watch']);
    grunt.registerTask('minify', [ 'concat', 'uglify']);

};
