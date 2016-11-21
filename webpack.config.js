module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
          Main: 'app/components/Main.jsx',
          Nav: 'app/components/Nav.jsx',
          Fleet: 'app/components/Fleet.jsx',
          Floatila: 'app/components/Floatila.jsx',
          Scheduler: 'app/components/Scheduler.jsx',
          Profile: 'app/components/Profile.jsx',
          Home: 'app/components/Home.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
};
