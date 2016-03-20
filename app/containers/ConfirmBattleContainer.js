import { Component, PropTypes } from 'react';
import { githubHelpers } from '../utils/githubHelpers';
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
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(players => {
                this.setState({
                    isLoading: false,
                    playersInfo: players
                });
            });
    }

    handleInitiateBattle() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    }

    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={::this.handleInitiateBattle}
                playersInfo={this.state.playersInfo} />
        );
    }
}
