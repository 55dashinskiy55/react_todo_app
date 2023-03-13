import React, {useState} from "react";
import ToDo from "./Components/ToDo";
import ToDoForm from "./Components/ToDoForm";

const App = () => {
    const [toDos, setToDos] = useState([])

    const addToDo = (text) => {
        const newToDos = [...toDos, {text}]
        setToDos(newToDos)
    }

    const completeToDo = (index) => {
        const newToDos = [...toDos]
        newToDos[index].isCompleted = true
        setToDos(newToDos)
    }

    const removeToDo = (index) => {
        const newToDos = [...toDos]
        newToDos.splice(index, 1)
        setToDos(newToDos)
    }
    return (
        <div className="app">
            <div className="todo_list">
            <ToDoForm addToDo={addToDo}/>
                {toDos.map((todo, index) => (
                    <ToDo key={index} index={index} todo={todo} completeToDo={completeToDo} removeToDo={removeToDo}/>
                ))}
                </div>
        </div>
    )

}

export default App