import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addition, multiplication, set } from './actions/actions-types';

import './App.css';

class App extends Component {

  handleChange = e => {

    const { name, value } = e.target;

    this.props.set({
      name: name,
      value: value
    })

  }

  render() {

    const { addition, multiplication } = this.props;
    const { number1, number2, result } = this.props.calculatrice;

    // au moins un des deux champs non rempli => false
    const disabled = number1 && number2;

    return (
      <>
        {/* Fragment permet de ne pas ajouter élement html en plus pour que React crée le noeud dans le DOM */}
        <p>Number1 :<input name="number1" type="text" value={number1} onChange={this.handleChange} /></p>
        <p>Number2 :<input name="number2" type="text" value={number2} onChange={this.handleChange} /></p>
        <p><button disabled={!disabled} onClick={addition}>Addition</button> </p>
        <p><button disabled={!disabled} onClick={multiplication}>Multiplication</button> </p>
        {result  && <p>{result}</p>}
      </>
    )
  }
}

const mapStateToProps = state => { return { ...state } }
const mapDispatchToProps = { set, multiplication, addition };

export default connect(mapStateToProps, mapDispatchToProps)(App);
