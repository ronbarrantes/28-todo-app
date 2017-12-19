import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import Dashboard from '../component/dashboard'

describe('Dashboard', () => {
  test('Dashboard initial state is empty', () => {
    let wrapper = mount(<Dashboard />)
    expect(wrapper.state('tasks')).toEqual([])
  })
})