var path = require('path');

module.exports = {
    mode: 'production',
    entry: 'dev',
    externals : {
        react: 'react'
    },
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        // extensions: ['.js', '.vue'],
        alias: {  
          'dev': "./Components/myt-react-snippets"
        },
        modules: [
          "node_modules"
        ]
    },
    resolveLoader: {
        modules: [
            "node_modules"
        ],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css?$/, 
                exclude: /(node_modules)/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}