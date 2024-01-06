import {Resolver} from '@parcel/plugin';
import path from 'path';

export default new Resolver({
    async resolve({specifier}) {

        console.log("------------- 설정중 -------------")

        // if (specifier === 'special-module') {
        //     return {
        //         filePath: path.join(__dirname, 'special-module.js')
        //     };
        // }

        // Let the next resolver in the pipeline handle
        // this dependency.
        return null;
    }
});