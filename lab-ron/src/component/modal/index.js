import React from 'react'

let modalStyles = (props) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: props.show ? 'block' : 'none',
  background: 'blue',
})
/// Styles not working 
let modalMainStyles = {
  position: 'fixed',
  background: 'rgba(0,0,0,.5)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

class Modal extends React.Component {
  render() {
    console.log(this.props.children)
    return (
      <div style={modalStyles(this.props)} className='modal'>
        <button onClick={this.props.onClose}> close </button>
        <main style={modalMainStyles}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal