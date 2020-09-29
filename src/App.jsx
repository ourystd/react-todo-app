import React, {Component} from 'react';
import './App.scss';

import TodoList from './components/TodoList/TodoList';

import {
  Card, CardBody
} from 'reactstrap';

class App extends Component {

  render(){
    return (
      <div className="container pt-4">
        <Card className="App">
          <CardBody>
            <h1>Todo App</h1>
            <hr/>
            <TodoList/>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
