
const TodoData = (props) => {
    //props là 1 object
    // {
    //     name: "Thế Anh",
    //     age: 20,
    //     data: {}
    // }

    //(Advise)
    const { todoList, deleteTodo } = props;

    const handleOnDelete = (id) => {
        deleteTodo(id)
        // alert(id)
    }
    return (
        <>
            <div className='todo-list'>
                {todoList.map((item, index) => {
                    console.log(">>> check map ", item, index);
                    return (
                        <div className={`todo-item ${index}`} key={index}>
                            <div>{item.name}</div>
                            <button onClick={() => handleOnDelete(item.id)}>Delete</button>
                        </div>)
                })}
            </div>
        </>
    )
}

export default TodoData;