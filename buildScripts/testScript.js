// this file is not transpiled use coomoJS here

// register babel to transpiled before our test run

require('babel-register')();

// disable webpack features that mocha doesnt understand here

require.extensions['.css']=function(){}