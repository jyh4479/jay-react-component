// import {Resolver} from "@parcel/plugin";
// import path from "path";
//
// export default new Resolver({
//     async resolve({specifier}) {
//         if (specifier === '@jay-react-component/stylesheet') {
//             return {
//                 filePath: path.join(__dirname, 'packages/stylesheet/src')
//             };
//         }
//
//         // Let the next resolver in the pipeline handle
//         // this dependency.
//         return null;
//     }
// });

const {Resolver} = require("@parcel/plugin");
const path = require("path");

module.exports = new Resolver({
    async resolve({specifier}) {
        if (specifier === '@jay-react-component/stylesheet') {
            console.log(path.join(__dirname, 'packages/stylesheet/src'))
            return {
                filePath: path.join(__dirname, 'packages/stylesheet/src/index.css')
            };
        }

        // Let the next resolver in the pipeline handle
        // this dependency.
        return null;
    }
});