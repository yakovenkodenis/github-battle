import { PropTypes } from 'react';


const puke = (object) => {
    return <pre>{JSON.stringify(object, 2, ' ')}</pre>
}

const Results = (props) => {
    return (
        <div>Results: {puke(props)}</div>
    );
};

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

export default Results;
