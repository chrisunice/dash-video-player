% Auto-generated: do not edit by hand
\name{''VideoPlayer}

\alias{''VideoPlayer}

\title{VideoPlayer component}

\description{
TODO update the docstring  VideoPlayer is a wrapper for a video component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
''VideoPlayer(id=NULL, url=NULL, playing=NULL, loop=NULL, controls=NULL, volume=NULL,
muted=NULL, playbackRate=NULL, width=NULL, height=NULL, style=NULL,
progressInterval=NULL, duration=NULL, playedSeconds=NULL, seekTo=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this compnent in Dash callbacks}

\item{url}{Character. The url of a video or song to play
Can be an array or MediaStream}

\item{playing}{Logical. Set to true or false to pause or play the media}

\item{loop}{Logical. Set to true or false to loop the media}

\item{controls}{Logical. Set to true or false to display native player controls
Controls cannot be hidden for Wistia videos}

\item{volume}{Numeric. Set the volume of the player, between 0 and 1
null uses default volume on all players}

\item{muted}{Logical. Mutes the player
Only works if volume is set}

\item{playbackRate}{Numeric. Set the playback rate of the player
Only supported by YouTube, Wistia, and file paths}

\item{width}{Character. Set the width of the player}

\item{height}{Character. Set the height of the player}

\item{style}{Named list. Add inline styles to the root element}

\item{progressInterval}{Numeric. The time between onProgress callbacks, in milliseconds}

\item{duration}{Numeric. Duration of the media, in seconds}

\item{playedSeconds}{Numeric. Seconds played of the media updated
at the rate of progressInterval}

\item{seekTo}{Numeric. Seek to the given number of seconds, 
or fraction if the amount is between 0 and 1}
}
