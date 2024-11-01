const path = require('path');

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: './src/index.js', // Your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true, // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Matches .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpile JavaScript files using Babel
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions
    },
    devtool: 'source-map', // Enable source maps for easier debugging
};
