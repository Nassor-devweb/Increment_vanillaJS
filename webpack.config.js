const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
 entry : {
    main : path.join(__dirname,"src/index.js")
 },
 output : {
    path : path.join(__dirname,"dist"),
    filename : "[name].bundle.js"
 },
 module : {
    rules : [
        {
            use : ["babel-loader"],
            test : /\.js/,
            exclude : /(node_module)/ 
        },   
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader"
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                {
                    loader: "file-loader"
                }
            ]
        }
    ]
 },
 plugins : [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename : "index.html",
        template: path.join(__dirname, "./src/index.html"),
        chunks : ["main"]
        //hash: true
    }),
    new CopyWebpackPlugin({
        patterns : [
            {
                from :'./src/assets/images/*',
                to : 'assets/images/[name][ext]',
            }
        ]
    })
 ],
 stats : 'minimal',
 devtool : 'source-map',
 mode : 'development',
 devServer :{
    open : true,
    static : path.resolve(__dirname,'./dist'),
    port : 4000
 }
}