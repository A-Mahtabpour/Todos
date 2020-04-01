import React, { Component } from 'react'
import Todolist from './Component/Todolist';
import './bootstrap.css'
import './App.css'
export default class App extends Component {
 
  render() {
    return (
      <div className='App'>
        <Todolist />
      </div>
    )
  }
}
