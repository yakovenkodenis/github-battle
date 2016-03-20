import { Component } from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer';


const Home = () => {
    return (
        <MainContainer>
            <h1>GitHub Battle</h1>
            <p className='lead'>Some fancy motto</p>
            <Link to='/playerOne'>
                <button
                    type='button'
                    className='btn btn-lg btn-success'>
                    Get Started
                </button>
            </Link>
        </MainContainer>
    );
};

export default Home;
