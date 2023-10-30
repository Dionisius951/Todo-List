import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodos } from "../redux/reducers/TodoReducer"

export default function TodoInput(){
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    function handleInput(event){
        event.preventDefault()
        dispatch(addTodos(input))
        setInput("")
    }
    return (
        <>
            <form className="flex justify-center">
                <input type="text" placeholder="What to do...." className="rounded border-2 border-black py-3 px-3 w-80 mx-4" value={input} onChange={(e)=> setInput(e.target.value)}/>
                <button className="rounded border-2 bg-cyan-500 text-neutral-50 px-5 py-2" onClick={handleInput}>Add</button>
            </form>
        </>
    )
}