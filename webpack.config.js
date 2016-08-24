module.exports = {
    entry: './src/app/index.js',
    output: {
        path: './bundle',
        filename: 'app.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.html$/,
            loader: 'ngtemplate!html'
        }]
    }
}