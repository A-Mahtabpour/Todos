import React, { Component } from 'react'
import TodoFrorm from './TodoFrorm'
import Todo from './Todo'

export default class Todolist extends Component {
    state = {
        todos: [{ id: 1, text: "This is a sample", complete: false }],
        todoToShow: 'all',
        toggleAllComplete: true
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    };

    updateTodoToShow = (s) => {

        this.setState({
            todoToShow: s
        })
    };


    handleDeleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    };

    removeAllTodosThatArrComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    };


    render() {

        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <div>

                <TodoFrorm onSubmit={this.addTodo} />
                <div id='todoBlock'>
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            todo={todo}
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                        />
                    ))}
                </div>


                <section className='d-md-flex justify-content-between'>
                    <div>
                        {this.state.todos.filter(todo => !todo.complete).length} items
                    </div>

                    <div className='d-flex'>
                        <button className='btn btn-block btn-md-inline btn-outline-info '
                            onClick={() => { this.updateTodoToShow("all") }}>all</button>
                        <button className='btn btn-block btn-md-inline btn-outline-info '
                            onClick={() => { this.updateTodoToShow("active") }}>Need to be done</button>
                        <button className='btn btn-block btn-md-inline btn-outline-info '
                            onClick={() => { this.updateTodoToShow("complete") }}>complete</button>
                    </div>

                    {this.state.todos.filter(todo => todo.complete).length ?
                        <div>
                            <button className="btn btn-outline-secondary mt-3 mt-md-0"
                                onClick={this.removeAllTodosThatArrComplete}>
                                remove all complete todos
                                </button>
                        </div>
                        : null}

                    <div>

                        <button className="btn btn-outline-secondary mt-3 mt-md-0"

                            onClick={() => {
                                this.setState({
                                    todos: this.state.todos.map(todo => ({
                                        ...todo,
                                        complete: this.state.toggleAllComplete
                                    })),
                                    toggleAllComplete: !this.state.toggleAllComplete
                                })
                            }}
                        >Select / Deselect All</button>
                    </div>
                </section>

            </div>
        )
    }
}
