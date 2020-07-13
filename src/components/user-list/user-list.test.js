import React from 'react';
import { shallow } from 'enzyme';
import { UserList } from './user-list.component';


it('should render UserList component', () => {
  expect(shallow(<UserList userData={
      {
        currentUser: {},
        errorMessage: '',
        isLoading: false,
        users: []
      }
  } />)).toMatchSnapshot();
});
