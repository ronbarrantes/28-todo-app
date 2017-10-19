import React from 'react'

class TaskItem extends React.Component {
  render() {
    let { task, removeTask } = this.props
    return (
      <li className='task-item'>
        <p>{task.task}</p>
        <button onClick={() => removeTask(task)}>Remove</button>
      </li>
    )
  }
}

export default TaskItem