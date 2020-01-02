import React, { Component } from 'react';
import './style.css';
class Members extends Component {
    state = { users: [] }
    componentWillMount = () => {
        fetch('https://randomuser.me/api/?results=30')
        .then(results => {
            return results.json();
        }).then(data => {
            let users = data.results.map((user) => {
                
                return (
                    <li key={user.location.postcode}>
                        <img src={user.picture.medium} />
                        <span onClick={this.deleteCell}>X</span>
                    </li>
                )
            })
            this.setState({users:users})
        })
    }
    deleteCell = (index,e) => {
        const _users = [...this.state.users];
        _users.splice(index,1);
        this.setState({users:_users});
    }
    render() {
        return (
            <div id='container'>
                {this.state.users}
            </div>
        );
    }
}

export default Members;