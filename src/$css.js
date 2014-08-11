(function(name, exportFn) {
    if (typeof module != 'undefined' && module.exports) {
        module.exports = exportFn()
    } else {
        this[name] = exportFn();
    }
})('$css', function() {
    "use strict";
    var doc = window.document
            , pos = doc.getElementsByTagName('head')[0];
    var $css = function(urls, alias) {
        //if urls has push method. it's array, otherwise string.
        urls = urls['push'] ? urls : [urls];
        urls.forEach(function(elm, idx) {
            create(elm, alias)
        });
    }
    var create = function(url, alias, media) {
        var elm = doc.createElement("link");
        elm.rel = "stylesheet";
        elm.href = url;
        //elm.media = media;
        elm.setAttribute("alias", alias);
        pos.insertBefore(elm, pos.lastChild)
    }
    var remove = function(urlsOrAliases) {
        var isUrl, node;
        urlsOrAliases = urlsOrAliases['push'] ? urlsOrAliases : [urlsOrAliases];
        urlsOrAliases.forEach(function(elm) {
            isUrl = /^(http|)s?(:|)\/\//.test(elm) ? true : false;
            //can't use querySelectorAll, because the query result may empty.
            do {
                if (node) {
                    node.parentNode.removeChild(node);
                }
                if (isUrl) {
                    node = doc.querySelector('link[href="' + elm + '"]');
                } else {
                    node = doc.querySelector('link[alias="' + elm + '"]');
                }
            } while (node);
        })
    }
    $css.create = create;
    $css.remove = remove;
    return $css;
});