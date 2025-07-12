import Task from "../entities/Task";
import { Singleton } from "../utils/Decorators";

@Singleton
export default class TaskService {

    /**@type {Task[]} */
    tasks = [];

    /**@private */
    _taskBackupName = "task-backup";

    constructor() {
        const jsonTaskList = localStorage.getItem(this._taskBackupName);
        if (jsonTaskList) {
            this.tasks = JSON.parse(jsonTaskList)
        }
    }

    /**@type {Task} */
    createNewTask(Task) {
        this.tasks.push(Task)
        this.createTaskBackup();
    }

    /**@private */
    createTaskBackup() {
        localStorage.setItem(this._taskBackupName, JSON.stringify(this.tasks));
    }

    getAllTasks() {
        return this.tasks;
    }

}