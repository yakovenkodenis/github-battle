import { Component, PropTypes } from 'react';
import Results from '../components/Results';
import { githubHelpers } from '../utils/githubHelpers';


export default class ResultsContainer extends Component {

    constructor(props, context) {
        super(props, context)
    }

    state = {
        isLoading: true,
        scores: []
    }

    componentDidMount() {
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(scores => {
                this.setState({
                    scores: scores,
                    isLoading: false
                });
            });
    }

    render() {
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores} />
        );
    }
}
