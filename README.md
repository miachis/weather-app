# Webpack Template
This template is a guide to help developers quickly jump into webpack bundling fast.
# Steps for using the template
- Firstly, we need to install the latest version Webpack and Webpack-cli (this helps us run webpack on the cli) in our project's root directory. Ensure you're in the correct directory before writing the command below into your Terminal or Command Line
  ```
  npm install webpack webpack-cli --save-dev
  ```
- Run the command below in your Terminal or Command Line to make sure ALL the dependencies in package.json for this template are correctly installed in your project's directory
  ```
  npm install
  ```
- Write all your template HTML and styles inside the template.html and styles.css files found inside [/src](https://github.com/miachi-solomon/webpack-temp/tree/main/src)
- After you've written out your HTMl and CSS and linked the CSS to the index.js. Run this command to open up a dev server.
    ```
    npm start
    ```
- Running this command bundles each HTML, CSS and JS into its seperate minified file inside of the dist directory. Which will be used for production.
  ```
  npm run build
  ```
- Feel free to make changes to any of the files or folder structure to fit your needs.