import React, { Component } from 'react';
import { connect } from 'react-redux';

import  { decrement, increment, decrement_10, increment_10 } from './actions/actions-types';

import './App.css';

class App extends Component {


  render() {

    const { decrement, increment, count, count_10, decrement_10, increment_10  } = this.props;

    // this.props.increment(); fonction passée dans les props du composant

    return (
      <>
        <p><button onClick={increment}>Increment + 1</button></p>
        <p><button onClick={decrement}> Decrement - 1</button></p>
        <p>{count}</p>
        <p><button onClick={increment_10}>Increment + 10</button></p>
        <p><button onClick={decrement_10}> Decrement - 10</button></p>
        <p>{count_10}</p>
      </>
    )
  }
}

const mapStateToProps = state => { return { count : state.counter.count, count_10 : state.counter_10.count } }

// passe les action dans les props du composant App
// const mapDispatchToProps = dispatch => {

//   return {
//     increment : () => dispatch({type : INCREMENT})
//   }
// }

const mapDispatchToProps = { decrement, increment, decrement_10, increment_10 } ;

export default connect(mapStateToProps, mapDispatchToProps)(App);
