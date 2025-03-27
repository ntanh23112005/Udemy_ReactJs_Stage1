
const TodoNew = (props) => {
    console.log(">>> Check point: ", props);
    const { addNewTodo } = props;

    // addNewTodo("Thầy giáo thế"); //fire
    const handelClick = () => {
        alert("Click me")
    }
    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name);
    }
    return (
        <>
            <div className='todo-form'>
                <input className='todo-input'
                    type="text"
                    placeholder='Insert your job here'
                    onChange={(event) => handleOnChange(event.target.value)} />

                <button className='todo-button'
                    onClick={handelClick}
                >Add</button>
            </div>
        </>
    )
}

export default TodoNew;