const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    // specify the entry point of our application
    entry: ['./src/index.js'],
    // indicate where to put what will webpack collect
    output: {
        path: __dirname + '/dist',
        // bundle.js -  it is customary to call the entire set of scripts and modules that we create
        filename: 'bundle.js'
    },
    devServer: {
        // path to the folder where we'll run the server
        // we put everything that will turn out as a result of compilation into a folder dist/
        contentBase: __dirname + '/dist'
    },
    // to add plugin to webpack we have 'plugins' field
    plugins: [
        // create an instance of the class HTMLPlugin
        new HTMLPlugin({
            // to the class constructor we pass the object
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    // so that every time we don't write a .js when connecting files
    resolve: {
        extensions: ['.js']
    }
};