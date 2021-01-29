This example shows how to use Ammo.js with TypeScript in Debug and Release modes: [hello-ammojs-webgl10-ts](https://github.com/8Observer8/hello-ammojs-webgl10-ts)

You should install these modules globally:

- npm i typescript -g
- npm i browserify -g
- npm i uglify-js -g

Install all packages from `package.json` using the command: `npm i`

Comment/Uncomment Debug/Release in `index.html` and `main.ts` (see comments in these files).

Use these commands to build the example:

- `npm run debug` - to set breakpoint in code editors and to publish on PlayGround (like Plunker), for example: [Hello Ammo.js. WebGL 1.0, TypeScript](https://plnkr.co/edit/6KQT9VQHWvswY3cc?preview)
- `npm run release` - to bundle in `bundle.min.js` for production
