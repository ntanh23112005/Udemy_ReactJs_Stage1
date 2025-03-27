import './components/todo/todo.css';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg'


const App = () => {

  const myVariable = "Thế Anh";
  const age = 20;
  const data = {
    address: "TP Hồ Chí Minh",
    country: "Việt Nam"
  }

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  }

  // {key:value}
  return (
    <>
      <div className="todo-container">
        <div className="todo-title"><h3>TODO LIST</h3></div>

        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={myVariable}
          age={age}
          data={data}
        />

        <div className="todo-image">
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
