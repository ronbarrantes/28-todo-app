import React from 'react'
import uuid from 'uuid/v1'

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
    task.create = new Date()
    task.id = uuid()
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))
  }

  componentDidUpdate(){
    console.log('State:', this.state)
  }
  // removeTask() { }

  render() {
    return (
      <div>
        <h1>dashboard component</h1>
      </div>
    )
  }
}
export default Dashboard