/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { VideoPlayer } from '../lib';

class App extends Component {

    constructor() {
        super(props);
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <VideoPlayer />
        )
    }
}

export default App;
