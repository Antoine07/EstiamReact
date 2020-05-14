import React, { Component } from 'react';
import { connect } from 'react-redux';

import { decrement, increment } from './actions/actions-types';

import './App.css';

class App extends Component {


  render() {

    const { count, decrement, increment } = this.props;

    // this.props.increment(); fonction passée dans les props du composant

    return (
      <>
        <p><button onClick={increment}>Increment</button></p>
        <p><button onClick={decrement}> Decrement</button></p>
        <p>{count}</p>
      </>
    )
  }
}

const mapStateToProps = state => { return { count: state.count } }

// passe les action dans les props du composant App
// const mapDispatchToProps = dispatch => {

//   return {
//     increment : () => dispatch({type : INCREMENT})
//   }
// }

const mapDispatchToProps = { decrement, increment } ;

export default connect(mapStateToProps, mapDispatchToProps)(App);
