import { PropTypes } from 'react';
import { Link } from 'react-router';
import Loading from './Loading';
import UserDetails from './UserDetails';
import MainContainer from './MainContainer';
import UserDetailsWrapper from './UserDetailsWrapper';


const StartOver = () => {
    return (
        <MainContainer>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>
                    Start Over
                </button>
            </Link>
        </MainContainer>
    );
};

const Results = (props) => {

    if (props.isLoading) {
        return (
            <Loading speed={300} text='Just a moment' />
        );
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainContainer>
        );
    }

    const winningIndex = +!(props.scores[0] > props.scores[1]);
    const losingIndex = +!winningIndex;

    console.log(props.scores[losingIndex]);

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails
                        score={props.scores[winningIndex]}
                        info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails
                        score={props.scores[losingIndex]}
                        info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    );
};

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

export default Results;
