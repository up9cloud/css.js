'use strict';

describe('css loader test', function() {
    var url = 'http://up9cloud.net/css/bootstrap.min.css',
            url2 = 'test.css';

    describe('remove method test', function() {
        var pos = document.getElementsByTagName('head')[0];
        beforeEach(function() {
            var elm = document.createElement("link");
            elm.rel = "stylesheet";
            elm.href = url;
            elm.type = "text/css";
            //elm.media = media;
            pos.insertBefore(elm, pos.lastChild)

            var elm = document.createElement("link");
            elm.rel = "stylesheet";
            elm.href = url2;
            elm.type = "text/css";
            //elm.media = media;
            pos.insertBefore(elm, pos.lastChild)
        })

        afterEach(function() {

        })

        it('should remove the one link', function() {
            $css.remove(url)
            var link1 = document.querySelector('link[href="' + url + '"]');
            expect(link1).toBe(null);
            var link2 = document.querySelector('link[href="' + url2 + '"]');
            expect(link2).not.toBe(null);
        })

        it('should remove the two links', function() {
            $css.remove([url, url2])
            var link1 = document.querySelector('link[href="' + url + '"]');
            expect(link1).toBe(null);
            var link2 = document.querySelector('link[href="' + url2 + '"]');
            expect(link2).toBe(null);
        })

    })

    describe('create method test', function() {
        var isCalled;
        
        beforeEach(function(done) {
            isCalled = false;
            $css.create(url, function() {
                isCalled = true;
                done()
            });
        })

        afterEach(function() {
            isCalled = false;
            $css.remove(url);
        })

        it('should create a link', function() {
            var link = document.querySelector('link[href="' + url + '"]');
            expect(link).not.toBe(null);
            expect(link.href).toBe(url);
        })

        it('should call callback', function(done) {
            expect(isCalled).toBeTruthy();
            done()
        })
    });

    describe('main $css function create link test', function() {
        beforeEach(function() {
        })

        afterEach(function() {
            $css.remove([url, url2]);
        })

        it('should create a link with string parameter', function() {
            $css(url)
            var link = document.querySelector('link[href="' + url + '"]');
            expect(link).not.toBe(null);
            expect(link.href).toBe(url);
        })

        it('should create two link with array parameter', function() {
            $css([url, url2])
            var link = document.querySelector('link[href="' + url + '"]');
            expect(link).not.toBe(null);
            expect(link.href).toBe(url);
            var link2 = document.querySelector('link[href="' + url2 + '"]');
            expect(link2).not.toBe(null);
//            expect(link2.href).toBe(url2);
        })
    });

    describe('main $css function callback test', function() {
        var isCalled;

        beforeEach(function(done) {
            isCalled = false;
            $css([url, url2], function() {
                isCalled = true;
                done()
            })
        })

        afterEach(function() {
            isCalled = false;
            $css.remove([url, url2]);
        })

        it('should call callback', function(done) {
            expect(isCalled).toBeTruthy();
            done();
        })
    })
});