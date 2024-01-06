import path from "path";

export default {
    resolve: {
        alias: [
            {find: "@jay-react-component/portal", replacement: path.resolve(__dirname, "packages/portal/src")},
            {find: "@jay-react-component/stylesheet", replacement: path.resolve(__dirname, "packages/stylesheet/src")}
        ]
    }
}