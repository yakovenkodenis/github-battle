import { Component, PropTypes } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';


export default class ConfirmBattleContainer extends Component {

    constructor(props, context) {
        super(props, context);
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    state = {
        isLoading: true,
        playersInfo: []
    }

    componentDidMount() {
        const query = this.props.location.query;
        // Fetch info from github, then update state
    }

    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo} />
        );
    }
}
