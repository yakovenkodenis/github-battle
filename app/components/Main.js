import { Component } from 'react'


export default class Main extends Component {
    render() {
        return (
            <div className='main-container'>
                {this.props.children}
            </div>
        );
    }
}
