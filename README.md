$css.js
======

Create or remove css link node.

Influenced by [$script]

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

Callback
```js
$css('bootstrap.css',function(){
    //do something after css loaded.
})
```

#Development

need to install [nodejs] and npm first.
```
clone https://github.com/up9cloud/css.js.git
npm install
```

##Test
```
karma start
```

##Browser versions?

[To ensure css link is load ][when css loaded]


[$script]:https://github.com/ded/script.js
[when css loaded]:http://www.phpied.com/when-is-a-stylesheet-really-loaded/
[nodejs]:http://nodejs.org/