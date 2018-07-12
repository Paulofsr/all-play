module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}