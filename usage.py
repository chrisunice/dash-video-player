import dash
import dash_daq as daq
import dash_html_components as html
import dash_core_components as dcc
from dash.exceptions import PreventUpdate
from dash.dependencies import Input, Output, State

import dash_video_player as dvp
import datetime

app = dash.Dash(__name__)

app.layout = html.Div([
    dvp.VideoPlayer(
        id='video-player',
        url='/static/flying_spirit.mp4',
        progressInterval=50,
    ),
    html.H4(id='clock-header'),
    dcc.Input(
        id='seek-input',
        placeholder="HH:MM:SS.ss",
        debounce=True,
        type='text'
    ),
    html.Button(
        id='seek-btn',
        children=['Seek']
    )
])


@app.callback(
    Output('clock-header', 'children'),
    [Input('video-player', 'playedSeconds')]
)
def update_clock(seconds):
    if seconds is None:
        raise PreventUpdate

    s, fs = divmod(seconds, 1)
    hs = int(round(fs*100, 0))
    m, s = divmod(s, 60)
    h, m = divmod(m, 60)
    return '{:02n}:{:02n}:{:02n}.{:02n}'.format(h, m, s, hs)


@app.callback(
    Output('video-player', 'seekTo'),
    [Input('seek-btn', 'n_clicks')],
    [State('seek-input', 'value')]
)
def update_scrubber(n, value):
    if n is None:
        raise PreventUpdate

    h, m, s = value.split(':')
    total_seconds = float(h)*3600 + float(m)*60 + float(s)
    return total_seconds


if __name__ == '__main__':
    app.run_server(debug=True,
                   port='8010')
# end file
