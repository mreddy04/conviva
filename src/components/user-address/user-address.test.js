
import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import fetchMock from 'fetch-mock'

import { UserAddress } from './user-address.component';


const renderUserAddress = () => render( < UserAddress user = {
      {
        age: 48,
        email: "Telly.Hoeger@billy.biz",
        id: 7,
        name: "Kurtis Weissnat",
        phone: "210.067.6132",
        address: [{
            city: "Howemouth",
            street: "Rex Trail",
            suite: "Suite 280",
            zipcode: "58804-1099"
        }]
      }
  } /> );

afterEach(() => {
    fetchMock.restore();
    cleanup()
});

test('initial UI is rendered as expected', () => {
    let { getByTestId } = renderUserAddress();
    console.log(getByTestId);
});
