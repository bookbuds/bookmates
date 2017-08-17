const path = require( 'path' );

module.exports =
{
    entry: './public/js/main.js',

    output:
    {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'public/build' )
    },

    module:
    {
        rules:
        [
            //BABEL
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 
                {
                    loader: 'babel-loader',
                    options:
                    {
                        presets: [ 'env' ] 
                    }
                }
            },
            //CSS BUILD
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            //SASS BUILD
            {
                test: /\.(scss|sass)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            //IMAGES
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader' ]
            },
            //FONTS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ 'file-loader' ]
            }
        ]
    }
};