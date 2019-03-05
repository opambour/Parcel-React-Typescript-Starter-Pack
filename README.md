# Parcel React Typescript Starter Pack

parcel-up-react is a zero configuration React web application bundler with the help of Parceljs (fast blazing zero configuration web application bundler). This package relies on Parceljs to work effectively with react, assets, css, scss, javascript, typescript, hrm and everything this package has to offer.

It's simple and configurable to your perusal. Just import your assests, javascript, and sass or css files with ease.

## Bundling Files

Bundling files come into 3 forms: serve, build and watch

### Serving files

Serve comes with a development server, which will automatically rebuild your app as you change files and supports hot module replacement for fast development. To serve React, add this to your package.json file:

"dev:server": "parcel src/frontend/public/index.html -p 4200 --open".

-p [port] will be used to serve your app in localhost
--open will open your default browser

The name "dev:server" is optional and you can use any name to satisfy your needs.

### Building files

Builds the assets once, it also enabled minification and sets the NODE_ENV=production environment variable.

Example 1: "build:client": "parcel build src/frontend/Client.jsx --public-url ./ --target browser --out-dir dist/frontend"

Example 2: "build:nodeServer": "parcel build src/backend/Server.js --target node --out-dir dist/backend

--public-url [./ or /] will Set the public URL to serve on
--target [name] Possible targets are node, browser, electron
--out-dir [directory] output directory to build your files to
--out-file [fileName] by default it uses the original file name.
To change output file name: --outfile fileName.js

### Watching files

The watch command is similar to serve, with the main difference being it doesn't start up a server. It builds
and watches your file for any changes.

Note:
By default, package.json's dependencies are not included when using --target node or --target electron. This flag adds them to the bundle. Target node and electron will not bundle package.json's dependencies (but will include devDependencies). This behavior can be overriden using --bundle-node-modules flag (see below).

Enjoy...!
