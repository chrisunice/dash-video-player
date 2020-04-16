# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class VideoPlayer(Component):
    """A VideoPlayer component.
TODO update the docstring

VideoPlayer is a wrapper for a video component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this compnent in Dash callbacks
- url (string; optional): The url of a video or song to play
Can be an array or MediaStream
- playing (boolean; default False): Set to true or false to pause or play the media
- loop (boolean; default False): Set to true or false to loop the media
- controls (boolean; default True): Set to true or false to display native player controls
Controls cannot be hidden for Wistia videos
- volume (number; default 0.8): Set the volume of the player, between 0 and 1
null uses default volume on all players
- muted (boolean; default False): Mutes the player
Only works if volume is set
- playbackRate (number; default 1): Set the playback rate of the player
Only supported by YouTube, Wistia, and file paths
- width (string; default '640px'): Set the width of the player
- height (string; default '360px'): Set the height of the player
- style (dict; optional): Add inline styles to the root element
- progressInterval (number; default 10): The time between onProgress callbacks, in milliseconds
- duration (number; optional): Duration of the media, in seconds
- playedSeconds (number; optional): Seconds played of the media updated
at the rate of progressInterval
- seekTo (number; optional): Seek to the given number of seconds, 
or fraction if the amount is between 0 and 1"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, url=Component.UNDEFINED, playing=Component.UNDEFINED, loop=Component.UNDEFINED, controls=Component.UNDEFINED, volume=Component.UNDEFINED, muted=Component.UNDEFINED, playbackRate=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, style=Component.UNDEFINED, progressInterval=Component.UNDEFINED, duration=Component.UNDEFINED, playedSeconds=Component.UNDEFINED, seekTo=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'url', 'playing', 'loop', 'controls', 'volume', 'muted', 'playbackRate', 'width', 'height', 'style', 'progressInterval', 'duration', 'playedSeconds', 'seekTo']
        self._type = 'VideoPlayer'
        self._namespace = 'dash_video_player'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'url', 'playing', 'loop', 'controls', 'volume', 'muted', 'playbackRate', 'width', 'height', 'style', 'progressInterval', 'duration', 'playedSeconds', 'seekTo']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(VideoPlayer, self).__init__(**args)
