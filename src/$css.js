(function(name, exportFn) {
    if (typeof module != 'undefined' && module.exports) {
        module.exports = exportFn()
    } else {
        this[name] = exportFn();
    }
})('$css', function() {
    "use strict";
    var doc = window.document
            , pos = doc.getElementsByTagName('head')[0]
            , count_jobs;
    var $css = function(urls, aliasOrCallback, callback) {
        var alias, finalCallback, created_links;
        //if urls has push method. it's array, otherwise string.
        urls = urls['push'] ? urls : [urls];
        count_jobs = urls.length;
        created_links = [];
        if (callback) {
            alias = aliasOrCallback;
            finalCallback = callback;
        } else if (aliasOrCallback) {
            if (typeof aliasOrCallback === 'function') {
                alias = false;
                finalCallback = aliasOrCallback;
            } else {
                alias = aliasOrCallback;
                finalCallback = function() {
                };
            }
        } else {
            alias = false;
            finalCallback = function() {
            };
        }
        var jobCallback = function() {
            count_jobs--;
            if (count_jobs <= 0) {
                return finalCallback()
            }
        }
        urls.forEach(function(url, idx) {
            if (url === null) {
                return jobCallback()
            }
            if (typeof created_links[idx] === 'undefined') {
                created_links[idx] = true;
                create(url, jobCallback)
            }
        });
        return $css
    }
    var create = function(url, callback) {
        var elm = doc.createElement("link");
        elm.rel = "stylesheet";
        elm.href = url;
        elm.type = "text/css";
        //elm.media = media;
        elm.onload = callback;
        pos.insertBefore(elm, pos.lastChild)
    }
    var remove = function(urls, callback) {
        var node;
        urls = urls['push'] ? urls : [urls];
        urls.forEach(function(val) {
            //can't use querySelectorAll, because the query result may empty. Don't know why.
            do {
                if (node) {
                    node.parentNode.removeChild(node);
                }
                node = doc.querySelector('link[href="' + val + '"]');
            } while (node);
        })
        if (callback) {
            return callback();
        }
    }
    $css.create = create;
    $css.remove = remove;
    return $css;
});