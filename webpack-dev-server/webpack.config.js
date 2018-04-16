const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        open: true,
        https: false,
        disableHostCheck: true,
        // compress: true,
        port: 8000,
        // after(app){
        //   console.log('======== after ==========')
        //   console.log(app)
        //   // do fancy stuff
        // },
        // before(app) {
        //   console.log('======== before =========')
        //   console.log(app)
        // }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" }, // Agrega el css al DOM en un <style>
                    { loader: "css-loader" }, // interpreta los archivos css en js via import
                ],
                // use: ExtractTextPlugin.extract({
                //   fallback: "style-loader",
                //   use: "css-loader"
                // })
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css")
        // new ExtractTextPlugin("css/[name].css")
    ]
}