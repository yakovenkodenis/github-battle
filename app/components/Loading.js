import { Component, PropTypes } from 'react';
import styles from '../styles';
import Radium from 'radium';


@Radium
export default class Loading extends Component {

    constructor(props, context) {
        super(props, context);
        this.originalText = this.props.text;
    }

    static propTypes = {
        text: PropTypes.string,
        speed: PropTypes.number
    }

    static defaultProps = {
        text: 'Loading',
        speed: 300
    }

    state = {
        text: this.props.text
    }

    componentDidMount() {
        const stopper = this.originalText + '...';
        this.interval = setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.originalText
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }
        }, this.props.speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <div style={[styles.container]}>
                <p style={[styles.content]}>
                    {this.state.text}
                </p>
            </div>
        );
    }
}
