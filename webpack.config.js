const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =
    {
        entry:
        [
            'webpack-hot-middleware/client',
            path.resolve(__dirname, 'private/js/main.js'),
        ],
        output:
        {
            path: '/',
            publicPath: '/build',
            filename: 'bundle.js'
        },
        devtool: 'cheap-eval-source-map',
        plugins: [
            new ExtractTextPlugin('/stylesheets/style.css'),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ],
        module:
        {
            rules:
            [
                //BABEL
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'private/js'),
                    use:
                    {
                        loader: 'babel-loader',
                        options:
                        {
                            presets: ['env']
                        }
                    }
                },
                //CSS BUILD
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                //SASS BUILD
                {
                    test: /\.(scss|sass)$/,
                    include: path.resolve(__dirname, 'private/sass'),
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
                //IMAGES
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    include: path.resolve(__dirname, 'private/images'),
                    use: 'file-loader'
                },
                //URL-LOADER
                {
                    test: /\.(png|jpg)$/,
                    include: path.resolve(__dirname, 'private/images'),
                    use: [{
                        loader: 'url-loader',
                        options: { limit: 10000 } // Convert images < 10k to base64 strings
                    }]
                },
                //FONTS
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: 'file-loader'
                }
            ]
        }
    };