$css.js
======

Create or remove css link node.

inspired from [$script]

#Download

```sh
wget 'https://raw.githubusercontent.com/up9cloud/css.js/master/dist/$css.min.js'
```

#Usage

Create a css link.
```js
$css('bootstrap.css')
//<link rel="stylesheet" href="bootstrap.min.css">
```

Create css links more than one.
```js
$css(['bootstrap.css', 'another-bootstrap.css'])
//<link rel="stylesheet" href="bootstrap.min.css">
//<link rel="stylesheet" href="another-bootstrap.css">
```

Create css links and set the attribute "alias"(for remove).
```js
$css(['bootstrap.css', 'another-bootstrap.css'],'bootstrap')
//will add this two links.
//<link rel="stylesheet" href="bootstrap.min.css" alias="bootstrap">
//<link rel="stylesheet" href="another-bootstrap.css" alias="bootstrap">
```

Remove the links have href=?
```js
$css.remove(['bootstrap.css', 'another-bootstrap.css'])
```

Remove the links have alias=?
```js
$css.remove(['alias1', 'alias2'])
```

[$script]:https://github.com/ded/script.js