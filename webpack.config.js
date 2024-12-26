const path = require("path");
const fs = require("fs");
const nodeExternals = require('webpack-node-externals');

// Webpack entry points. Mapping from resulting bundle name to the source file entry.
const entries = {
    index: "./src/index.ts"
};
const DEFAULT_SRC_DIR = "src";

// Loop through subfolders in the "Samples" folder and add an entry for each one
const entriesDir = path.join(__dirname, DEFAULT_SRC_DIR);
fs.readdirSync(entriesDir).filter(dir => {
    if (fs.statSync(path.join(entriesDir, dir)).isDirectory()) {
        entries[dir] = "./" + path.relative(process.cwd(), path.join(entriesDir, dir, "index"));
    }
});

module.exports = () => ({
    entry: entries,
    externals: [nodeExternals()],
    output: {
        filename: "[name]/index.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "azure-devops-extension-sdk": path.resolve("node_modules/azure-devops-extension-sdk")
        },
    },
    stats: {
        warnings: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, 
                type: 'asset/inline'
            },
            {
                test: /\.html$/, 
                type: 'asset/resource'
            }
        ]
    }
});