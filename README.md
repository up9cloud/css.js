$css.js
======

Load or remove css link node.

inspired from [$script]

#Download

```sh
wget https://raw.githubusercontent.com/up9cloud/css.js/master/dist/$css.min.js
```

#Usage

load one css
```js
$css('bootstrap.css')
```

load two css
```js
$css(['bootstrap.css', 'another-bootstrap.css'])
```

load css and set a attribute "alias" for remove.
```js
$css(['bootstrap.css', 'another-bootstrap.css'],'bootstrap')
//<link rel="stylesheet" href="css/bootstrap.min.css" alias="bootstrap">
```

remove link by url
```js
$css.remove(['bootstrap.css', 'another-bootstrap.css'])
```

remove link by alias
```js
$css.remove(['alias1', 'alias2'])
```

[$script]:https://github.com/ded/script.js