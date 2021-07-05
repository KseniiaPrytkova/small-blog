# small-blog

used:
- asynchronous event-driven JavaScript runtime - `Node.js`;
- static module bundler for JavaScript applications - `webpack`;
- JavaScript compiler - `Babel`;  

## steps
Architecture - **modules**, each of which will be responsible for its own functionality, so that we can decompose the code and manage it easier. We'll bundler all this modules with the help of `webpack` and compile them into one file. We'll use ES6 and for this application to work in all browsers, we need to install `Babel` so that we recompile our JS into the old format(cross-browser compatibility). Also we will have a local server.

1) Working with a file package.json (basic configuration of our application)
check if Node.js works on our computer:
```
$ node -v && npm -v
```
create package.json file:
```
$ npm init
```