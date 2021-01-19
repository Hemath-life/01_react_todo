/*
1. get input value and hold to variable
2. list out the value 
3. add new value to previous values

*/

import React, { useState } from "react"
import TodoItem from "./TodoItem"
import InputArea from "./InputArea"

function App() {
	const [items, setItems] = useState([])
	function addItem(inputText) {
		setItems(preValue => [...preValue, inputText])
	}

	function deleteItem(id) {
		setItems(prevItems => {
			return prevItems.filter((item, index) => {
				return index !== id
			})
		})
	}

	return (
		<div className='container'>
			<div className='heading'>
				<h1>To-Do List</h1>
			</div>
			<InputArea onAdd={addItem} />
			{/* -------------------  Todo list Section ------------------------------   */}
			<div>
				<ul>
					{items.map((todoItem, index) => (
						// here im gonna pass  delete item function
						<TodoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default App
