import React from 'react'
import TaskItem from '../task-item'

class TaskList extends React.Component {

  render() {

    return (
      <ul className='task-list'>
        {this.props.tasks.map((task, i) =>
          <TaskItem
            key={i}
            task={task}
            removeTask={this.props.removeTask}
            updateTask={this.props.updateTask}
          />
        )}
      </ul>
    )
  }
}

export default TaskList