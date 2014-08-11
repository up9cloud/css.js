/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        // Metadata.
        meta: {
            project:'$css.js'
            ,url:'https://github.com/up9cloud/css.js'
            ,author:'up9cloud'
            ,license:'MIT'
        },
        banner: '/*! <%= meta.project %> CSS loader\n' +
                ' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= meta.url %>\n' +
                ' * <%= meta.author %> | Licensed <%= meta.license %> */\n',
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
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', [ 'concat', 'uglify']);

};
