## Youtube Data API Sample

1.Enable Youtube Data API

- Visit, and Enable Youtube Data API [https://console.developers.google.com/apis/dashboard]
- If not exist then Create New Project
- Search For API `Youtube Data API`, Enable It.
- Then Left Menu Click `Credentials`
- Create `API Keys`, Select `none` then `Restrict key` radio and choose `Youtube Data API` form Dropdown.
- And Finally, From `Credentials` create `OAuth 2.0 Client IDs` with `Authorized JavaScript origins ` Urls `http://localhost' and `http://appserver-domain.com` .
- Replace `js/YoutubeDataApi.js` file `CLIENT_KEY` and `API_KEY`. 
- Now run app using `liveserver` or deploy it production.


`Note: Origins must me match as define as OAuth2.0 client console.`


2.Uses Guides
- After run application using liveserver
- Login with Gmail account and accept require permission
- Finally, Navigate Button and test.