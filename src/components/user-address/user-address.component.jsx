import React from 'react';
import './user-address.styles.css';
import { connect } from 'react-redux';

const UserAddress = ({ user }) => (
    <div id="userAddress">
        <div className="text-left">
            <h4>Customer Address</h4>
        </div>
        {
            user && user.address && user.address.length !== 0 ? 
            (
                user.address.map( (add, index) => {
                    return (
                        <div className="card border-secondary mb-3" key={add.zipcode}>
                            <div className="card-header">Address {index + 1}</div>
                            <div className="card-body text-secondary">
                                <table className="table table-sm table-borderless">
                                    <tbody className="text-left">
                                        {
                                            Object.keys(add).map((key) => (
                                                <tr key={key}>
                                                    <td><strong>{key}:</strong></td>
                                                    <td>{add[key]}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })
            ): (Object.keys(user).length === 0 && (!user.address || user.address.length === 0)) ? (
                <div className="mt-5 no-data">
                    <p><strong> click user to get details</strong></p>
                </div>
            ): (
                <div className="mt-5 no-data">
                    <p><strong>No contact address</strong></p>
                </div>
            )
        }
    </div>
);

const mapStateToProps = (state) => ({
    user: state.usersData.currentUser
});
export default connect(mapStateToProps)(UserAddress);
