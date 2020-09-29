import React, {Component} from 'react'

import './todolist.scss'

import { ListGroup } from 'reactstrap'
import { Alert } from 'reactstrap';

import TodoItem from '../TodoItem/TodoItem'
import NewTaskForm from '../NewTaskForm/NewTaskForm'


class TodoList extends Component{

	state = {
		tasks: [
			{id: 1, name: 'Task 1', done: false},
			{id: 2, name: 'Task 2', done: false},
			{id: 3, name: 'Task 3', done: true},
			{id: 4, name: 'Task 4', done: false},
			{id: 5, name: 'Task 5', done: true},
		],
		newTaskName: '' 
	}

	

	createTask = (e) => {
		e.preventDefault()

		const newTask = {
			id: this.state.tasks.length + 1,
			name: this.state.newTaskName,
			done: false
		}
		console.log(newTask)
		this.setState( prevState => ({ 
				tasks: [...prevState.tasks, newTask],
				newTaskName: ''
			})
		)
	}

	deteleTask =  (id) => {
		const indexToDelete = this.state.tasks.findIndex(task => task.id === id)
		let newTasks = [...this.state.tasks]
		newTasks.splice(indexToDelete, 1)

		this.setState({
			tasks: newTasks
		})

		console.log(newTasks)
	}

	completeTask =  (id) => {
		// task.done = true
		const newTasks = this.state.tasks.map(task => {
			if (task.id === id) {
				task.done = (task.done) ? false: true;
			}

			return task
		})

		this.setState({
			tasks: newTasks
		})

		console.log(this.state.tasks)
		// css effect
	}

	handleChange = (e) => {
		this.setState({
			newTaskName: e.target.value
		})
	}

	editTask = (id, event) => {
		const newTasks = this.state.tasks.map(task => {
			if (task.id === id) {
				task.name = event.target.value
			}

			return task
		})

		this.setState({
			tasks: newTasks
		})
	}

	render(){

		return(
			<div>
				<ListGroup>
				{
					this.state.tasks.map(task => (
						<TodoItem 
							key={task.id} 
							task={task}
							onDelete={this.deteleTask}
							onStatusChange={this.completeTask}
							editTask={this.editTask}
						/>
					)) 
				}
				</ListGroup>

				{!this.state.tasks.length && <Alert color="light">There are no tasks available. You can create one.</Alert> }
				<NewTaskForm 
					currentValue={this.state.newTaskName}
					handleChange={this.handleChange}
					createTask={this.createTask}
				/>
			</div>
		)
	}
}

export default TodoList