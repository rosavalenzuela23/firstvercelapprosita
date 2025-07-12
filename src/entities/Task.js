import { v4 as uuidv4 } from 'uuid';

export default class Task {

    /**@type {String} */
    id
    /**@type {String} */
    title
    /**@type {String} */
    description
    /**@type {boolean} */
    favorite
    /**@type {boolean} */
    finished = false;

    /**
     * @param {String} title 
     * @param {String?} description 
     * @param {String?} favorite 
     * @param {String?} finished 
     */
    constructor(title, description, favorite, finished) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.favorite = favorite;
        this.finished = finished ? finished : false;
    }

    isFavorite() {
        return this.favorite;
    }

}