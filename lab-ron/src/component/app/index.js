import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Dashboard from '../dashboard'


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>ToDo</h1>
              <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/dashboard'>dashboard</Link></li>
              </ul>
            </header>
            <Route exact path='/' component={() => <p>Welcome to the todo tracker</p>} />
            <Route exact path='/dashboard' component={Dashboard} />

          </div>
        </BrowserRouter >
      </div >
    )
  }
}

export default App