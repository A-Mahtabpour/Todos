import React, { Component } from 'react';
import shortid from 'shortid';

export default class TodoFrorm extends Component {
    state = ({
        text: ''
    });

    handelChange = event => {
        this.setState({
            // [event.target.name]: event.target.value
            // i added
            text: event.target.value
        })
        
    };

    handelSubmit = (event) => {
        event.preventDefault();
        if (this.state.text.trim() !== '' && this.state.text.length > 5) {
            this.props.onSubmit({
                id: shortid.generate(),
                text: this.state.text,
                complete: false,
            });
            
            this.setState({
                text: ''
            })
        } else {
            alert(`please write somethings need to be done...!
 and maby you write less than 5 charecter`)
        }
    }

    render() {
        return (
            <form onSubmit={this.handelSubmit} className="mt-5">
                <div className="form-group">
                    <h1 className='mb-4' >Todo App</h1>
                    <input className="form-control mb-3"
                        name="text" autoFocus
                        value={this.state.text}
                        onChange={this.handelChange}
                        placeholder="what need to be done...!"
                    />
                    <button onClick={this.handelSubmit} className='btn btn-primary'>Add Todo</button>
                    <small className="form-text text-muted">you ca see your activities</small>
                </div>
            </form>
        )
    }
}
