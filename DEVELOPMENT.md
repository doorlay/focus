## Development


1. [Install node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), if they're not already installed on your machine.
2. Install the required node modules:
```sh
npm install
```
3. Run the following command so that webpack can watch and recompile the `/src` files live to the `/dist` folder:
```sh
npm run watch
```
To temporarily load the extension in a normal Firefox instance:

1. Go to `about:debugging`
2. Click `Load Temporary Add-on`
3. Load the `dist` folder

### Updating the version number

Run the following command with the appropriate `npm version {patch/minor/major}` to bump the package.json version based on [semver](http://semver.org/):

```sh
npm version patch && git push && git push --tags
```

### Building submission file

Run the following command so that webpack can recompile the `/src` files in production mode to the `/dist` folder:

```sh
npm run build
```

## States export json format

The expected formatting of Tomato Clock's .json files is as follows

```json
[
  { "timeout": 1500000, "type": "tomato", "date": "2020-08-29T18:07:55.895Z" },
  { "timeout": 300000, "type": "shortBreak", "date": "2022-04-13T04:13:37.406Z" },
  { "timeout": 900000, "type": "longBreak", "date": "2022-04-13T04:13:40.030Z" },
  { "timeout": 1500000, "type": "tomato", "date": "2022-04-13T04:13:45.182Z" }
]
```

- At the base, there is an array [] of objects {}
- Each object {} is an instance of the clock timer.
- Within each object:
  - "timeout": is the time in milliseconds of the timer
  - "type": is one of "tomato", "shortBreak", or "longBreak"
  - "date": is the exact date and time string in the [ISOString format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
