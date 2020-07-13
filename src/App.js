import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import UserList from './components/user-list/user-list.component';
import UserAddress from './components/user-address/user-address.component';
import { connect } from 'react-redux';

const App = () => {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <div className="row pt-3">
                        <h3 className="text-center w-100">Customer Details</h3>
                    </div>
                    <div className="row py-3">
                        <div className="col-md-7">
                            <UserList/>
                        </div>
                        <div className="col-md-5">
                            <UserAddress />
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

const mapStateToProps = (state) => ({
    userList: state.usersData.users
})

export default connect(mapStateToProps)(App);
