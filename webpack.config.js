var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'babel-polyfill',
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ["es2015", "stage-0", "react"],
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-class-properties"
                    ]
                }
            },
            { test: require.resolve('react'), loader: 'expose?React' },
            { test: require.resolve('react-dom'), loader: 'expose?ReactDOM' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}
