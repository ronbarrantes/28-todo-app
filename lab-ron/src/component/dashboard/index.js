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
    this.updateTask = this.updateTask.bind(this)
  }

  addTask(task) {
    let result = {
      ...task,
      created: new Date(),
      completed: false,
      id: uuid(),
    }

    this.setState(prevState => ({
      tasks: [...prevState.tasks, result],
    }))
  }



  updateTask(task) {
    this.setState(({ tasks }) => ({
      tasks: tasks.map(item => item.id === task.id ? task : item),
    }))
  }

  removeTask(task) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(item => task.id !== item.id),
    }))
  }

  componentDidUpdate() {
    console.log('__STATE__:', this.state)
  }

  render() {
    return (
      <div className='dashboard'>
        <TaskForm onComplete={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          updateTask={this.updateTask}
        />
      </div>
    )
  }
}
export default Dashboard
