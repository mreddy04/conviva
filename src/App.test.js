import React from 'react';
import App from './App';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';


const renderApp = () => render(<App />);

afterEach(() => {
    fetchMock.restore();
    cleanup()
});


// it('expect to render app component', () => {
//     const mockStore= {
//         currentUser: {},
//         errorMessage: '',
//         isLoading: false,
//         users: []
//     }
//     expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
// })

test('renders app Component', () => {

});
