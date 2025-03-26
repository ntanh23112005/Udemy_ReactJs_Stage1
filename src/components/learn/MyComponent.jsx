//arrow function: const + NameFunction = () => {} 
// Name function: PascalCase (ex: MyComponent)

//JSX
//fragment<></>: use to cover div

import './style.css'
const MyComponent = () => {
    return (
        <>
            <div>Thế Anh và React Stage 1</div>
            <div className="child"
                style={
                    { fontWeight: 'bolder' }
                }>child</div>
        </>
    )
}

export default MyComponent;