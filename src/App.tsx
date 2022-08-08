import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

function App() {
  // primitive types
  let student: string = 'Rahim';
  let age: number = 20;
  let isDumb: boolean = false;

  // array type
  let students: string[] = ['Arif', 'Ruhul', 'Karim'];
  let fees: number[] = [1, 5, 7];

  // interface declaration 
  // start with 'interface' word
  // name must be start with capital letter
  /* interface Person {
    name: string,
    age: number,
    job?: string, // optional
    employed: boolean | string,
    location?: any, // optional
  } */

  // types 
  type Person = {
    name: string,
    age: number,
    job?: string, // optional
    employed: boolean | string,
    location?: any, // optional
  }


  const person: Person = {
    name: 'Bill Clinton',
    age: 57,
    employed: true,
    location: { lat: 22, lng: 3 },
  }

  // function type
  const handleAddUser = (firstName: string, age: number, address: string): number /*-- return type(number) --- */ => {
    const total: number = 50;
    console.log(firstName, age, address);
    return total;
  }


  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
