module.exports={
    presets: [
        "@babel/env",
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        "react-hot-loader/babel",
        ["import", {
            libraryName: "antd",
            libraryDirectory: "es",
            style: true
        }],
        ["transform-import-css", {
            "generateScopedName": "lib-[name]-[local]-[hash:base64:4]"
        }]
    ]   
};