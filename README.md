## 🔰 Youtube Data API Example

Using Youtube Data API we can access YouTube features to our application, including the ability to upload videos, create and manage playlists, and more.

## 🔰 Setup Youtube Data API Congifuraiton 


- [ ] Visit, and [Enable Youtube Data API](https://console.developers.google.com/apis/dashboard)
- [ ] If not exist then **Create New Project**
- [ ] Search For API **Youtube Data API**, Enable It.
- [ ] Then Left Menu Click **Credentials**.
- [ ] Create **API Keys**, Select **none** then **Restrict key** radio and choose **Youtube Data API** from Dropdown.
- [ ] And Finally, From **Credentials** create **OAuth 2.0 Client IDs** with **Authorized JavaScript origins** Urls [http://localhost] and [http://localhost:5000] or [https://custom-appserver-domain.com]
- [ ] Replace **js/YoutubeDataApi.js** file **CLIENT_KEY** and **API_KEY**. 
- [ ] Now run the app using **live server** or deploy its production server. [I used VScode life server Extension]

Note: Origins must me match as defined as **OAuth2.0 client** console.
Details guide will be found. [Guide](https://developers.google.com/youtube/v3/getting-started). Else Occurre authentication-related error. 


## 🔰 Finally, Run & Test Application

- 📗 Clone Project from GitHub and then move on
- 📗 After run application using live server
- 📗 Login with Gmail account and accept require permission
- 📗 Finally, Navigate Button and test.
