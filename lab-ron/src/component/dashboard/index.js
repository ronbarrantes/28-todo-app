import React from 'react'
import uuid from 'uuid/v1'
import TaskForm from '../task-form'
import TaskList from '../task-list'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }

    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  addTask(task) {
    task.created = new Date()
    task.completed = false
    task.id = uuid()
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))
  }

  componentDidUpdate() {
    console.log('__STATE__:', this.state)
  }

  removeTask(task) {
    // this.state = task.filter()
    console.log({ task })

    this.setState(prevState => ({
      tasks: prevState.tasks.filter(item => task.id !== item.id),
    }))
  }

  render() {
    return (
      <div>
        <TaskForm onComplete={this.addTask} />
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    )
  }
}
export default Dashboard
