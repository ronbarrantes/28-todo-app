import React from 'react'

class ToDoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
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
    this.setState({ todo: '' })
  }

  render() {


    return (
      <form
        className='todo-form'
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          name='todo'
          placeholder='To Do'
          value={this.state.todo}
          onChange={this.handleChange}
        />

        <button type='submit'>Add ToDo</button>
      </form>
    )

  }
}

export default ToDoForm