const path = require("path");
const { node } = require("webpack");

module.exports = {
    target: 'node',  
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};