function TaskComponent({ task }) {
    return (
        <>
            <div className="container-fluid px-3 rounded-3 my-3 py-3" style={{ backgroundColor: "#D1D5DB" }}>
                <div className="row">
                    <div className="col">
                        {task.title}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {task.description || ""}
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default TaskComponent;