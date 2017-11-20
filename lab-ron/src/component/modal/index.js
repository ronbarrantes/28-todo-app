import React from 'react'

let modalStyles = (props) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: props.show ? 'block' : 'none',
  background: 'rgba(0,0,0,.5)',
})

let modalMainStyles = {
  position: 'fixed',
  background: '#fff',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

class Modal extends React.Component {
  render() {
    return (
      <div style={modalStyles(this.props)} className='modal'>
        <main style={modalMainStyles}>
          {this.props.children}
          <button onClick={this.props.onClose}> close </button>
        </main>
      </div>
    )
  }
}

export default Modal