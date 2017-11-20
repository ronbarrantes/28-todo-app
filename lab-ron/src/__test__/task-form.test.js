import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import TaskForm from '../component/task-form'

describe('Task Form', () => {
  test('Task Form initial state is empty', () => {
    let wrapper = mount(<TaskForm />)
    console.log('--> TASK', wrapper.state('task'))
    expect(wrapper.state('task')).toEqual('')
    expect(wrapper.state('comment')).toEqual('')
    expect(wrapper.state('completed')).toBeFalsy()
  })
})