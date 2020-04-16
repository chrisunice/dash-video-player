import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';

/**
 * TODO update the docstring
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            played: 0,
            playedSeconds: 0, 
            loaded: 0,
            loadedSeconds: 0,
            duration: 0
        };
    }

    handleProgress = (state) => {
        this.setState(state)
        // console.log('onProgress', state)
        // // We only want to update time slider if we are not currently seeking
        // if (!this.state.seeking) {
        //   this.setState(state)
        // }
    }

    handleDuration = (duration) => {
        this.setState({duration})
    }

    render() {
        const {
            url, 
            playing, 
            controls,
            volume, 
            muted, 
            loop, 
            playbackRate, 
            width, 
            height, 
            style         
        } = this.props
        const { played, playedSeconds, loaded, loadedSeconds } = this.state

        return (
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              playing={playing}
              controls={controls}
              volume={volume}
              muted={muted}
              loop={loop}
              playbackRate={playbackRate}
              width={width}
              height={height}
              style={style}
              // onReady={() => console.log('onReady')}
              // onStart={() => console.log('onStart')}
              // onPlay={this.handlePlay}
              // onEnablePIP={this.handleEnablePIP}
              // onDisablePIP={this.handleDisablePIP}
              // onPause={this.handlePause}
              // onBuffer={() => console.log('onBuffer')}
              // onSeek={e => console.log('onSeek', e)}
              // onEnded={this.handleEnded}
              // onError={e => console.log('onError', e)}
              onProgress={this.handleProgress}
              // onDuration={this.handleDuration}
            />
        );
    }
}

VideoPlayer.defaultProps = {
    playing: false,
    controls: true,
    volume: 0.8,
    muted: false,
    loop: false,
    playbackRate: 1,
    width: '640px',
    height: '360px',
    style:{},
};

VideoPlayer.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,

    /**
     * The url of a video or song to play
     * Can be an array or MediaStream object
     */
    url: PropTypes.string,

    /**
     * Set to true or false to pause or play the media
     */
    playing: PropTypes.bool,

    /**
     * Set to true or false to display native player controls
     * Vimeo, Twitch and Wistia player will always display controls
     */
    controls: PropTypes.bool,

    /**
     * Set the volume of the player, between 0 and 1
     * null uses default volume on all players
     */
    volume: PropTypes.number,

    /**
     * Mutes the player
     * Only works if volume is set
     */
    muted: PropTypes.bool,

    /**
     * Set to true or false to loop the media
     */
    loop: PropTypes.bool,

    /**
     * Set the playback rate of the player
     * Only supported by YouTube, Wistia, and file paths
     */
    playbackRate: PropTypes.number,

    /**
     * Set the width of the player
     */
    width: PropTypes.string,

    /**
     * Set the height of the player
     */
    height: PropTypes.string,

    /**
     * Add inline styles to the root element
     */
    style: PropTypes.object,

    /**
     * Applies the html5 playsinline attribute where supported, which allows
     * videos to be played inline and will not automatically enter fullscreen
     * mode when playback begins (for iOS).
     */
    playsinline: PropTypes.bool,

    /**
     * Returns the number of seconds that have been played
     */
    playedSeconds: PropTypes.number,
};
