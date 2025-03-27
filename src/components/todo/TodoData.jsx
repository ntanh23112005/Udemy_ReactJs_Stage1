
const TodoData = (props) => {
    //props là 1 object
    // {
    //     name: "Thế Anh",
    //     age: 20,
    //     data: {}
    // }

    // method 1 (Advise)
    const { name, age, data } = props;

    // method 2 (No Advise)
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    //method 3 (No advise)
    // const TodoData= ({name}) => {}
    console.log(">>> Check props: ", props);

    return (
        <>
            <div className='todo-list'>
                <div>My name is {name}</div>
                <div>Learning react</div>
                <div>Watching react</div>
            </div>
        </>
    )
}

export default TodoData;