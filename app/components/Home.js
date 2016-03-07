import { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import styles from '../styles';


@Radium
export default class Home extends Component {
    render() {
        return (
            <div
                className='jumbotron col-sm-12 text-center'
                style={[styles.transparentBg]}>
                <h1>GitHub Battle</h1>
                <p className='lead'>Some fancy motto</p>
                <Link to='/playerOne'>
                    <button
                        type='button'
                        className='btn btn-lg btn-success'>
                        Get Started
                    </button>
                </Link>
            </div>
        );
    }
}
