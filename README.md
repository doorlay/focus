# Focus - Browser Extension
Focus is a simple browser extension that blocks undesired websites while your Pomodoro timer is running. Forked from [Tomato Clock](https://github.com/samueljun/tomato-clock?tab=readme-ov-file), the browser extension now has a "Blocklist" button where you can add websites to block for the duration of each "Tomato" interval, allowing for more focused work. Focus is currently available only for Firefox, and can be downloaded here. Pull requests are welcome.

## Development
1. Install node.js and npm, if you haven't already.
2. Install dependencies:
```
npm install
```
3. Recompile src/ folder into the dist/ folder:
```
npm run watch
```
To temporarily load the extension in a normal Firefox instance:

1. Go to `about:debugging`
2. Click `Load Temporary Add-on`
3. Load the `dist` folder

Your local changes should now take effect in real time in the browser.
