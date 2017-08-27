require('dotenv').config()
const express = require( 'express' );
const expressSession = require( 'express-session' );
const passport = require( './config/passport.config' );
const flash = require( 'connect-flash' );
const webpack = require( 'webpack' );
const path = require( 'path' );
const favicon = require( 'serve-favicon' );
const logger = require( 'morgan' );
const cookieParser = require( 'cookie-parser' );
const bodyParser = require( 'body-parser' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );

//SERVER
const app = express();

//=========================
// VIEW ENGINE
//=========================
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'pug' );

//=========================
// STATIC FILES
//=========================
app.use( express.static( path.join( __dirname, 'public' ) ) );

if ( process.env.NODE_ENV !== 'production' ) {
    const config = require('./webpack.config.js' );
    const compiler = webpack( config );
    app.use( webpackDevMiddleware( compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
        },
    }))
    app.use( webpackHotMiddleware( compiler, {
        log: console.log,
    }));
} else {
    app.use( express.static( path.join( __dirname, 'public' ) ) );    
}

//=========================
// MIDDLEWARE
//=========================
app.use( favicon( path.join( __dirname, 'public', 'favicon.ico' ) ) );
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( flash() );
app.use( expressSession( { secret: "My Secret Book" } ) );

app.use( passport.initialize() );
app.use( passport.session() );

//=========================
// CONTROLLER
//=========================
app.use( require( './controllers' ) );

//=========================
// 404 ERROR HANDLER
//=========================
app.use( function ( tRequest, tResponse, tNext ) 
{
    var tempError = new Error( 'Not Found' );
    tempError.status = 404;
    tNext( tempError );
});

// error handler
app.use( function ( tError, tRequest, tResponse, tNext ) 
{
    // set locals, only providing error in development
    tResponse.locals.message = tError.message;
    tResponse.locals.error = tRequest.app.get( 'env' ) === 'development' ? tError : {};

    // render the error page
    tResponse.status( tError.status || 500 );
    tResponse.render( 'error' );
});

module.exports = app;
