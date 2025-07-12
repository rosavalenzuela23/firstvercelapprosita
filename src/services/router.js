import { v4 as uuidv4 } from 'uuid';
import { Singleton } from '@/utils/Decorators.js';

@Singleton
export default class Router {

    /**@private */
    static _instance = null;

    /**@private @type {{id: string, callback: Function}} */
    _subscribers = [];

    _pagesNames = [
        'NewTask'
    ]

    // static getInstance() {
    //     if (Router._instance === null) {
    //         Router._instance = new Router();
    //     }

    //     return Router;
    // }

    changePage(pageName) {
        console.log('a')
    }

    addCallback(callback) {
        this._subscribers.push({
            id: uuidv4(),
            callback
        });
    }

    notifyCallbacks() {
        this._subscribers.forEach(s => {
            s.callback()
        });
    }

}