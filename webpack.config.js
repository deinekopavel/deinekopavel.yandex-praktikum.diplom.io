const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './src/js/main.js',
        about: './src/js/about.js',
        paper: './src/js/paper.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js'
    }
}
