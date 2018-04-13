const path = require('path');

module.exports ={
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    module: {
        rules:[
            //Here are the loaders
            {
                // test: what kind of file will recognize
                // use: what loader will take care the file
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
}