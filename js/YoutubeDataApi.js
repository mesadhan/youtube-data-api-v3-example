// api meta
const CLIENT_ID = "";
const API_KEY = "";

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube';
const DEFAULT_YOUTUBE_CHANNEL = 'sadhan98';
const DEFAULT_YOUTUBE_PLAYLIST_ID = 'PLFcfk1CEfi_Zi348K3kbzS7IzCevFLAku';


authorizeButton = document.getElementById('authorize-button');
signoutButton = document.getElementById('signout-button');
content = document.getElementById('content');


function initApiClient() {
    console.log('initialization', 'Hello World');
    console.log('API_KEY', API_KEY);
    console.log('CLIENT_ID', CLIENT_ID);

    handleAuth();
}

function handleAuth() {
    gapi.load('client:auth2', function () {
        gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT_ID,
            scope: SCOPES,
        }).then(() => {

            let user_access_token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;
            //console.log('main-token', user_access_token);

            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            authorizeButton.onclick = handleAuthClick;
            signoutButton.onclick = handleSignoutClick;
        });
    });

    let handleAuthClick = function () {
        gapi.auth2.getAuthInstance().signIn();
    };

    let handleSignoutClick = function () {
        gapi.auth2.getAuthInstance().signOut();
    };

    let updateSigninStatus = function (isSignedIn) {
        if (isSignedIn) {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'block';
            content.style.display = 'block';
            //getChannel(defaultChannel);
        } else {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
            content.style.display = 'none';
        }
    }
}


function getPlaylistItems() {
    GetPlaylistItems(25, API_KEY, DEFAULT_YOUTUBE_PLAYLIST_ID).execute(response => {
        console.log('Playlist Information', response);
        console.log('Playlist Information', response.items);

        alert('Open Console log...')
    });
}

function getChannelInformation() {
    let numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    GetChannelInformation(DEFAULT_YOUTUBE_CHANNEL).then(response => {
        const channel = response.result.items[0];
        const output = {
            id: channel.id,
            title: channel.snippet.title,
            thumbnails: channel.snippet.thumbnails.default.url,
            subscriber_count: numberWithCommas(channel.statistics.subscriberCount),
            view_count: numberWithCommas(channel.statistics.viewCount),
            video_count: numberWithCommas(channel.statistics.videoCount),
        };

        const visit_channel_url = `https://youtube.com/${channel.snippet.customUrl}`;
        const channel_description = channel.snippet.description;
        const relatedPlaylistsId = channel.contentDetails.relatedPlaylists.uploads;
        requestVideoPlaylist(relatedPlaylistsId, 10);       // get playlist from channel

        console.log('Channel Information', output);
        alert('Open Console log...')
    }).catch(err => alert('No Channel By That Name'));
}



