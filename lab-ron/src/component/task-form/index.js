import React from 'react'

let emptyState = {
  task: '',
}

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    let { task } = props
    this.state = task ? task : emptyState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.task)
      this.setState(nextProps.task)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState({ emptyState })
    console.log('RESET FORM')
  }

  handleChange(e) {
    let { name, value, type } = e.target
    value = type === 'number' ? Number(value) : value
    this.setState({ [name]: value })
  }

  render() {
    let buttonText = this.props.task ? 'Update Task' : 'Add Task'
    return (
      <form
        className='task-form'
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          name='task'
          placeholder='To Do'
          step='any'
          value={this.state.task}
          onChange={this.handleChange}
        />

        <button type='submit'>{buttonText}</button>
      </form>
    )

  }
}

export default TaskForm