import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DRAGON, ADD_DRAGON } from './constants/actions';
import './Form.css';

class Form extends Component {

    handleSubmit = e => {
        e.preventDefault();

        this.props.add();
    }

    handleChange = e => {
        const { value } = e.target;

        this.props.set(value);
    }

    render() {
        const { dragon, message } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group Form-header">
                    {message && <p className="alter alter-warning">{message}</p>}
                    <input
                        type="text"
                        className="form-control"
                        value={dragon}
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    disabled={dragon == ''}
                    type="submit"
                    className="btn btn-primary"
                >Add</button>
            </form>
        )
    }
}

const mapStateToProps = state => { return { dragon: state.dragon, message: state.message } };

const mapDispatchToProps = dispatch => {

    return {
        set: dragon => dispatch({
            type: DRAGON,
            dragon
        }),

        add: () => dispatch({ type: ADD_DRAGON })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);