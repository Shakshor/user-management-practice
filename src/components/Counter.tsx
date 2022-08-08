import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name?: string,
    job?: string
}

const Counter = () => {
    // state
    const [counter, setCounter] = useState(0);
    // const [user, setUser] = useState<User>({});
    // const [user, setUser] = useState<User>({ name: '', job: '' });

    const [user, setUser] = useState<User | null>(null);
    // using the union type for null value &
    // using union type

    // event handler
    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {

    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const userData = {
            name: 'Asif',
            job: 'teacher'
        }
        setUser(userData);
    }

    return (
        <div>
            <h2>This is Counter:{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;