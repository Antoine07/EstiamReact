import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addition, multiplication, set, setMemory, addMemory } from './actions/actions-types';

import './App.css';

class App extends Component {

  handleChange = e => {
    const { name, value } = e.target;

    this.props.set({
      name: name,
      value: value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.calculatrice.result != prevProps.calculatrice.result && this.props.memory.isMemory) {
      console.log('prevProps', prevProps.calculatrice);
      console.log('pros', this.props.calculatrice);

      const { number1, number2 } = prevProps.calculatrice;
      const { result, operator } = this.props.calculatrice;

      this.props.addMemory({
        number1: number1,
        number2: number2,
        result: result,
        operator: operator
      })
    }
  }

  render() {
    const { addition, multiplication, setMemory, addMemory } = this.props;
    const { number1, number2, result } = this.props.calculatrice;
    const { isMemory, memory } = this.props.memory;
    // au moins un des deux champs non rempli => false
    const disabled = number1 && number2;

    return (
      <>
        {isMemory && <p>Memory active</p>}
        <p>Number1 :<input name="number1" type="text" value={number1} onChange={this.handleChange} /></p>
        <p>Number2 :<input name="number2" type="text" value={number2} onChange={this.handleChange} /></p>
        <p><button disabled={!disabled} onClick={addition}>Addition</button> </p>
        <p><button disabled={!disabled} onClick={multiplication}>Multiplication</button> </p>
        <p><button onClick={setMemory}>switch Memory</button> </p>
        {result && <p>{result}</p>}

        {memory.length > 0 && (
          memory.map((m, i) => (
            <p key={i} >
              {m.number1} {m.operator} {m.number2} = {m.result}
            </p>
          ))
        )}
      </>
    )
  }
}

const mapStateToProps = state => { return { ...state } }
const mapDispatchToProps = { set, multiplication, addition, setMemory, addMemory };

export default connect(mapStateToProps, mapDispatchToProps)(App);
