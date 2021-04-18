const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};
