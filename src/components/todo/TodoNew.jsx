import { useState } from "react";

const TodoNew = (props) => {

    //useState hook (getter/setter)
    // const valueInput = "Abc";
    const [valueInput, setValueInput] = useState("Abc");

    const { addNewTodo } = props;

    // addNewTodo("Thầy giáo thế"); //fire
    const handelClick = () => {
        addNewTodo(valueInput);
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <>
            <div className='todo-form'>
                <input
                    className='todo-input'
                    type="text"
                    placeholder='Insert your job here'
                    value={valueInput}
                    onChange={(event) => handleOnChange(event.target.value)} />

                <button className='todo-button'
                    onClick={handelClick}
                >Add</button>

                <div>My text input is {valueInput}</div>
            </div>
        </>
    )
}

export default TodoNew;