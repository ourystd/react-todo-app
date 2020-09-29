import React from 'react'

import { Button, Form, Input } from 'reactstrap';

const NewTaskForm = ({currentValue, handleChange, createTask}) => (
    <Form inline onSubmit={createTask} className="mt-4">
        <Input
            className="col mb-2 mr-sm-2 mb-sm-0"
            type="text"
            required
            value={currentValue}
            onChange={handleChange}
        />
        <Button color="primary">Add new task</Button>
    </Form>
)

export default NewTaskForm