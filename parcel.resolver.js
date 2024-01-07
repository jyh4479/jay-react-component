import {Resolver} from "@parcel/plugin";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default new Resolver({
    async resolve({specifier}) {
        if (specifier === '@jay-react-component/stylesheet') {
            return {
                filePath: path.resolve(__dirname, 'packages/stylesheet/src/index.css')
            };
        }

        // Let the next resolver in the pipeline handle
        // this dependency.
        return null;
    }
});