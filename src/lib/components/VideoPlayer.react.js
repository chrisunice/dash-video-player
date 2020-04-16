import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';

/**
 * TODO update the docstring

 * VideoPlayer is a wrapper for a video component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
class VideoPlayer extends Component {
    constructor(props) {
        // From parent
        super(props);

        // Initial state
        this.state = {
          played: 0,
          playedSeconds: 0,
          loaded: 0, 
          loadedSeconds: 0,
          duration: 0
        };

        // Binding all callbacks
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleDuration = this.handleDuration.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.setSeekTo = this.setSeekTo.bind(this);
    }

    handlePlay() {
        const {setProps} = this.props;
        setProps({playing: true});
    }

    handlePause() {
        const {setProps} = this.props;
        setProps({playing: false});
    }

    handleDuration(duration) {
        const {setProps} = this.props;
        setProps({duration: duration});
    }

    handleProgress(state) {
        const {setProps} = this.props;
        setProps({
            played: state.played,
            playedSeconds: state.playedSeconds,
            loaded: state.loaded,
            loadedSeconds: state.loadedSeconds
        });
    }

    setSeekTo(){
        // Taken from DashPlayer.react.js
        const {seekTo, setProps} = this.props;
        if (seekTo !== null && typeof setProps  === 'function'){
            this.refs.player.seekTo(seekTo);
            setProps({seekTo: null});
        }
    }

    componentDidUpdate(prevProps){
        // Taken from DashPlayer.react.js
        this.setSeekTo();
    }    

    render() {
        return (
            <ReactPlayer
                ref='player'
                id={this.props.id}
                url={this.props.url}
                playing={this.props.playing}
                loop={this.props.loop}
                controls={this.props.controls}
                volume={this.props.volumne}
                muted={this.props.muted}
                playbackRate={this.props.playbackRate}
                width={this.props.width}
                height={this.props.height}
                style={this.props.style}
                progressInterval={this.props.progressInterval}
                onPlay={this.handlePlay}
                onPause={this.handlePause}
                onDuration={this.handleDuration}
                onProgress={this.handleProgress}
            />
        );
    }
}

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
     * Can be an array or MediaStream
     */
    url: PropTypes.string,

    /**
     * Set to true or false to pause or play the media
     */
    playing: PropTypes.bool,

    /**
     * Set to true or false to loop the media
     */
    loop: PropTypes.bool,

    /**
     * Set to true or false to display native player controls
     * Controls cannot be hidden for Wistia videos
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
     * The time between onProgress callbacks, in milliseconds
     */
    progressInterval: PropTypes.number,

    /**
     * Duration of the media, in seconds
     */
    duration: PropTypes.number, 

    /**
     * Seconds played of the media updated
     * at the rate of progressInterval
     */
    playedSeconds: PropTypes.number, 

    /**
     * Seek to the given number of seconds, 
     * or fraction if the amount is between 0 and 1
     */
    seekTo: PropTypes.number
};

VideoPlayer.defaultProps = {
    playing: false, 
    loop: false, 
    controls: true,
    volume: 0.8,
    muted: false,
    playbackRate: 1,
    width: '640px',
    height: '360px',
    progressInterval: 10
};

export default VideoPlayer;
// end file