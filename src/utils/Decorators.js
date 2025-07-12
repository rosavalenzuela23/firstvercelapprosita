import { v4 as uuidv4 } from 'uuid';

function Singleton(ctr) {

    let instance = null;
    let BASE_ID = uuidv4()

    return class {
        constructor(...args) {
            const id = args[0];

            if (id != BASE_ID) {
                throw new Error("YOU TRIED TO CREATE AN INSTANCE OF SINGLETON CLASS");
            }

            instance = new ctr(...args);
            return instance;
        }

        static getInstance() {
            if (instance === null) {
                instance = new this(BASE_ID);
            }

            return instance;
        }

    }
}

export { Singleton }
