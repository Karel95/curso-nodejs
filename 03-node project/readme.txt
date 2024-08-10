Proyecto Node:


comando:
npm init

package.json:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "build": "babel src --out-dir dist"
  }

nodemon:
https://nodemon.io/
npm install --save-dev nodemon

"devDependencies": {
    "nodemon": "^3.1.4"
  }



