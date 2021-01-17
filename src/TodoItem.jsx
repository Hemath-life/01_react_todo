import React from "react"

function TodoItem(props) {
	return (
		// here it called
		// <div onClick={props.onChecked(props.id)}>
		// here the onClick triggered then the prope.onChecked will call the function
		<div
			onClick={() => {
				props.onChecked(props.id)
			}}>
			<li>{props.text}</li>
		</div>
	)
}



export default TodoItem
