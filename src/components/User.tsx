import React, { FC } from 'react';
import UserModel from '../types/models';

// using interface 
/*--------------- 
interface Props {
    name: string,
    age: number,
    addUser: () => void // no return and no parameter
} ---------------- */

// another interface
interface Props {
    user: UserModel
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({ user, addUser }) => {

    return (
        <div>
            <h3>Hello From:{user.name} with email{user.email}</h3>
            <button onClick={() => addUser(user)}>Add Me</button>
        </div>
    );
};

export default User;