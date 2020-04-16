# --- Imports ---
import dash
import dash_html_components as html

import dash_video_player as dvp

# --- Application ---
app = dash.Dash(__name__)

app.layout = html.Div([
    dvp.VideoPlayer(
        id='video-player',
        url='/static/flying_spirit.mp4',
        progressInterval=100,
    )
])

# --- Main ---
if __name__ == '__main__':
    app.run_server(debug=True)
# end file
