//arrow function: const + NameFunction = () => {} 
// Name function: PascalCase (ex: MyComponent)

//JSX
//fragment<></>: use to cover div

import './style.css'
const MyComponent = () => {
    //render
    // const myVariable = "Thế Anh"; //string
    // const myVariable = 20; //number
    const myVariable = [1, 2, 3]
    // const myVariable = {
    //     name: "Thế Anh",
    //     age: "20"
    // }

    // (No render)
    // const myVariable = true; //boolean 
    // const myVariable = undefined; //boolean 
    // const myVariable = null; //boolean 
    return (
        <>
            <div>{JSON.stringify(myVariable)} và React Stage 1</div>
            <div>{console.log("Thế Anh nè")}</div>
            <div className="child"
                style={
                    { fontWeight: 'bolder' }
                }>child</div>
        </>
    )
}

export default MyComponent;