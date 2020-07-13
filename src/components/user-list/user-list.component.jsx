import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../utils/fetch.data';

import { setCurrentUser, updateUsersList, fetchUsersStart } from '../../redux/users/user.actions';

import Loader from '../common/loader/loader.component';

import './user-list.styles.css';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isLoading: true 
        // }
    }
    async componentDidMount() {
        const { fetchUsersStart } = this.props;
        fetchUsersStart();
        // const data = await fetchUsers();
        // updateUsersList(data);
        // this.setState({
        //     isLoading: false 
        // });
    }
    render() {
        const { users, isLoading, errorMessage, currentUser } = this.props.userData;
        const { setCurrentUser } = this.props;
        return isLoading ? (
            <Loader />
        ) : (
            <div className="user-list">
                <div className="text-left">
                    <h4>Customer List</h4>
                </div>
                {
                    errorMessage ? (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    ) : ( 
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(users).map(id => {
                                        const user = users[id];
                                        return (
                                            <tr className={currentUser.id === user.id ? 'active' : ''} 
                                                key={user.email} onClick={ () => setCurrentUser(user)}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.age}</td>
                                                <td>{user.phone}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    userData: state.usersData,
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    fetchUsersStart: () => dispatch(fetchUsersStart())
})
//    updateUsersList: users => dispatch(updateUsersList(users)),
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
