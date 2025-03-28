import TodoNew from './TodoNew';
import TodoData from './TodoData';
import reactLogo from '../../assets/react.svg'
import { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning React" },
        // { id: 2, name: "Watching React" },
    ])

    const addNewTodo = (name) => {
        // alert(`Call me ${name}`);
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }

        //Add toDoList
        setTodoList([...todoList, newTodo]);
    }

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id);
        setTodoList(newTodo);
        // console.log(id);

    }
    // {key:value}
    return (
        <>
            <div className="todo-container">
                <div className="todo-title"><h3>TODO LIST</h3></div>

                <TodoNew
                    addNewTodo={addNewTodo}
                />

                {todoList.length > 0 ?
                    < TodoData
                        todoList={todoList}
                        deleteTodo={deleteTodo}
                    />
                    :
                    <div className="todo-image">
                        <img src={reactLogo} className='logo' />
                    </div>
                }
            </div>
        </>
    )
}

export default TodoApp;