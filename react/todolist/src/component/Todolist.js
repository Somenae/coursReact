const Todolist = ({ task, onClickState, onClickDelete }) => {
    return (
        <section className="d-flex justify-content-between my-3">
            <label className={ task.done ? 'text-decoration-line-through' : ''}>{ task.name }</label>
            <div>
                <button className="btn btn-success me-3" onClick={() => { onClickState(task.id) }}> {task.done ? 'Invalider' : 'Valider'} </button>
                <button className="btn btn-danger" onClick={() => { onClickDelete(task) }}> Supprimer </button>
            </div>
        </section>
    );
}

export default Todolist;