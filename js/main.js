function GetPlaylistItems(maxResults = 25, API_KEY, playlistId) {
    let request = gapi.client.request({
        'method': 'GET',
        'path': '/youtube/v3/playlistItems',
        'params': {
            'maxResults': maxResults,
            'part': 'snippet,contentDetails',
            'playlistId': playlistId,
            'key': API_KEY
        }
    });

    return request;
}

function GetChannelInformation(channelName) {

    let client = gapi.client.youtube.channels
        .list({
            part: 'snippet,contentDetails,statistics',
            forUsername: channelName
        });

    return client;
}


function requestVideoPlaylist(playlistId, maxResults = 0) {
    gapi.client.youtube.playlistItems.list({
        playlistId: playlistId,
        part: 'snippet',
        maxResults: maxResults,
    }).then(response => {
        const playlistItems = response.result.items;
        console.log('Playlist', playlistItems)
    }).catch(err => alert('Request Cant Accepted'));
}
