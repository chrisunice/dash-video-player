# AUTO GENERATED FILE - DO NOT EDIT

''VideoPlayer <- function(id=NULL, url=NULL, playing=NULL, loop=NULL, controls=NULL, volume=NULL, muted=NULL, playbackRate=NULL, width=NULL, height=NULL, style=NULL, progressInterval=NULL, duration=NULL, playedSeconds=NULL, seekTo=NULL) {
    
    props <- list(id=id, url=url, playing=playing, loop=loop, controls=controls, volume=volume, muted=muted, playbackRate=playbackRate, width=width, height=height, style=style, progressInterval=progressInterval, duration=duration, playedSeconds=playedSeconds, seekTo=seekTo)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'VideoPlayer',
        namespace = 'dash_video_player',
        propNames = c('id', 'url', 'playing', 'loop', 'controls', 'volume', 'muted', 'playbackRate', 'width', 'height', 'style', 'progressInterval', 'duration', 'playedSeconds', 'seekTo'),
        package = 'dashVideoPlayer'
        )

    structure(component, class = c('dash_component', 'list'))
}
