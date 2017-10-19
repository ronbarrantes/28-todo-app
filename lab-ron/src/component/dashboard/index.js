import React from 'react'
import uuid from 'uuid/v1'
import ToDoForm from '../todo-form'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }

    this.addTask = this.addTask.bind(this)
    // this.removeTask = this.removeTask.bind(this)
  }

  addTask(task) {
    task.created = new Date()
    task.id = uuid()
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))
  }

  // removeNote(id){

  // }

  componentDidMount() {
    this.addTask({ todo: 'Buy Eggs', completed: false })
  }


  componentDidUpdate() {
    console.log('STATE:', this.state)
  }

  // removeTask() { }

  render() {
    return (
      <div>
        <ToDoForm onComplete={this.addTask}/>
      </div>
    )
  }
}
export default Dashboard
