import React, { useEffect, useState } from 'react';
import UserModel from '../types/models';
import User from './User';

const Users = () => {
    // users state
    const [users, setUsers] = useState<UserModel[]>([])
    // team state
    const [team, setTeam] = useState<UserModel[]>([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    // event handler
    const handleAddUser = (user: UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam);
    }

    return (
        <div>
            <h2>My Users</h2>
            <h3>Team size: {team.length}</h3>
            {/* <User name='Asif' age={40} addUser={handleAddUser}></User> */}

            {
                users.map(user => <User user={user} addUser={handleAddUser}></User>)
            }
        </div>
    );
};

export default Users;