const path = require('path');

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
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
