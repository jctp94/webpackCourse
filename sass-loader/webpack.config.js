const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]-bundle.js"
    },
    module: {
        rules: [
            //Here are the loaders
            {
                // test: what kind of file will recognize
                // use: what loader will take care the file
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader']
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                // test: what kind of file will recognize
                // use: what loader will take care the file
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader']
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test:/\.(png|jpg|gif|woff|eot|ttf|svg)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 100000,
                    }
                }
            },
            {
                // test: what kind of file will recognize
                // use: what loader will take care the file
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['es2015','react']
                    }
                }
            },
            {
                // test: what kind of file will recognize
                // use: what loader will take care the file
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
        //Here are the plugins 
    ]
}