# parseArguments
parse arguments

# example

``` js
var argv = require('parse-arguments')(process.argv.slice(2));
console.log(argv);
```

```
$ node example-script.js ignoreInstall skipInputs -build prod --gh=46 --ph -ou=99 -gu
{
    ignoreInstall: true,
    skipInputs: true,
    build: 'prod',
    gh: '46',
    ph: true,
    ou: '99',
    gu: undefined
}
```

# license

MIT