$css.js
======

Create or remove css link node.

Influenced by [$script]

To ensure css link is load from [this][when css loaded]

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

Remove the links have href=?
```js
$css.remove(['bootstrap.css', 'another-bootstrap.css'])
```

#Development

need to install [nodejs] and npm first.
```
clone https://github.com/up9cloud/css.js.git
npm install
```

##test
```
karma start
```

[$script]:https://github.com/ded/script.js
[when css loaded]:http://www.phpied.com/when-is-a-stylesheet-really-loaded/
[nodejs]:http://nodejs.org/