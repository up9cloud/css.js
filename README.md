$css.js
======

Load or remove css link node.

inspired from [$script]

#Usage

load one css
```
$css(['bootstrap.css'])
```

load two css
```
$css(['bootstrap.css', 'another-bootstrap.css'])
```

load css and set a attribute "alias"
```
$css(['bootstrap.css', 'another-bootstrap.css'],'bootstrap')
//<link rel="stylesheet" href="css/bootstrap.min.css" alias="bootstrap">
```

remove link by url
```
$css.remove(['bootstrap.css', 'another-bootstrap.css'])
```

remove link by alias
```
$css.remove(['alias1', 'alias2'])
```

[$script]:https://github.com/ded/script.js