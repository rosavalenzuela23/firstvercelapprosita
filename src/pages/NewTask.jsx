

function NewTask() {


    return (
        <form>
            <input type="text" placeholder="Task name" />
            <textarea name="" id="" placeholder="Task description"></textarea>
            <div>
                <button className="btn btn-success">
                    Create new task
                </button>
            </div>
        </form>
    )
}

export default NewTask;