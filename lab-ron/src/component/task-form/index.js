import React from 'react'

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let { name, value, type } = e.target
    value = type === 'number' ? Number(value) : value
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState({ task: '' })
  }

  render() {


    return (
      <form
        className='task-form'
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          name='task'
          placeholder='To Do'
          value={this.state.task}
          onChange={this.handleChange}
        />

        <button type='submit'>Add Task</button>
      </form>
    )

  }
}

export default TaskForm