import React, { Component } from 'react';
import { connect } from 'react-redux'; // subscribe dans le redux pour lire et exécuter une action
import { reverse, destroy } from './actions/actions-types';
import PropTypes from 'prop-types';

class Dragon extends Component {

    render() {
        // Afficher la liste des dragons
        const { dragons, reverse, destroy } = this.props;

        return (
            <ul className="list-group">
                <li className="list-group-item reverse">
                    <button
                        onClick={() => reverse() }
                        type="button" className="btn btn-primary push-right"
                    >Reverse/shuffle</button>
                </li>
                {dragons.map((dragon, i) => (
                    <li key={i} className="list-group-item">
                        {dragon}
                        <button 
                        onClick={() => destroy(dragon) }
                        type="button" 
                        className="btn btn-danger push-right"
                        >Delete</button>
                    </li>
                ))}
            </ul>)
    }
}

Dragon.propTypes = {
    dragons: PropTypes.arrayOf(PropTypes.string)
}

// lecture du state => props lecture seule dans mon composant
const mapStateToProps = state => { return { dragons: state.dragons } };

const mapDispatchToProps =  { reverse, destroy } ;

export default connect(mapStateToProps, mapDispatchToProps)(Dragon);