import React from 'react'
import Modal from '../modal'
import TaskForm from '../task-form'

class TaskItem extends React.Component {
  render() {
    let { task, removeTask, updateTask } = this.props


    let showEdit = () => updateTask({ ...task, editing: true })
    let hideEdit = () => updateTask({ ...task, editing: false })

    let updateAndClose = (task) => {
      updateTask({ ...task, editing: false })
    }

    return (
      <li className='task-item'>
        <p>{task.task}</p>
        <button onClick={showEdit}>Update</button>
        <button onClick={() => removeTask(task)}>Remove</button>

        <Modal onClose={hideEdit} show={task.editing}>
          <h1>Editing Mode</h1>
          <TaskForm onComplete={updateAndClose} task={task} />
        </Modal>
      </li>
    )
  }
}

export default TaskItem