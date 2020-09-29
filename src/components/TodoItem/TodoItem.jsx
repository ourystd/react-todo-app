import React from 'react'
import {Input, ListGroupItem, Button } from 'reactstrap'

const TodoItem = ({task, onDelete, editTask, onStatusChange}) => (
    <ListGroupItem key={task.id} className = {task.done? 'done': ''}>
        <Input 
            type="text" value={task.name} className="mb-2" disabled={task.done? true: false}
            onChange={editTask.bind(this, task.id)}
        />
        <Button 
            outline color="danger" size="sm" className="mr-2"
            onClick={onDelete.bind(this, task.id)}
        >
            Delete
        </Button>
        <Button 
            outline color={task.done? 'secondary' : 'success'} size="sm" 
            onClick={onStatusChange.bind(this, task.id)}
        >
            {
                task.done? 'Undone' : 'Done'
            }
        </Button>
    </ListGroupItem>
)

export default TodoItem