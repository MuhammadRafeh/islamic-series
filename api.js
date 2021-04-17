// // https://www.googleapis.com/youtube/v3/playlistItems?order=date&part=snippet%2C+id&playlistId=PLgirwYDDPtS1fWzj8IBUxjN07pF9Y9wdg&key=AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI&maxResults=50&pageToken=CDIQAA
// // http://www.omdbapi.com/?i=tt11093718&plot=full&apikey=bc613be7
// import React, { useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import admob, { MaxAdContentRating, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';
// //youtube api key AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI
// // remove ytp-chrome-top ytp-show-cards-title || ytp-pause-overlay ytp-scroll-min || ytp-youtube-button ytp-button yt-uix-sessionlink || annotation annotation-type-custom iv-branding

// //https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCfiM9_Me5QJBEr0PItkbXgw&maxResults=25&key=AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI
// // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLgirwYDDPtS2Tz7K6PZMYi_d8SeXQg-T5&key=AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI
// const fetchdata = async () => {
//   // var i;
//   const data = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLgirwYDDPtS1fWzj8IBUxjN07pF9Y9wdg&key=AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI&maxResults=50&pageToken=CDIQAA");
//   const response = await data.json()
//   // const pageToken = response.nextPageToken
//   // for (i = 0; i < 15; i++) {
//   const obj = {}
//   response.items.forEach(item => {

//     const title = item.snippet.title.split('|')[1];
//     const videoId = item.snippet.resourceId.videoId;
//     console.log(title, videoId)
//     obj[title] = videoId
//   });



//   const d = await fetch(`https://islamic-series-d79e7-default-rtdb.firebaseio.com/thegreatseljuk/urdusubtitles/season1.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(obj)
//   });

//   // } 



//   // https://islamic-series-d79e7-default-rtdb.firebaseio.com/
// }

// const App = () => {
//   useEffect(() => {
//     fetchdata();
//     admob()
//       .setRequestConfiguration({
//         // Update all future requests suitable for parental guidance
//         maxAdContentRating: MaxAdContentRating.PG,

//         // Indicates that you want your content treated as child-directed for purposes of COPPA.
//         tagForChildDirectedTreatment: true,

//         // Indicates that you want the ad request to be handled in a
//         // manner suitable for users under the age of consent.
//         tagForUnderAgeOfConsent: true,
//       })
//       .then(() => {
//         // Request config successfully set!
//       });


//   }, [])
//   return (
//     <View style={styles.screen}>
//       <BannerAd
//         unitId={TestIds.BANNER}
//         size={BannerAdSize.ADAPTIVE_BANNER}
//         requestOptions={{
//           requestNonPersonalizedAdsOnly: true,
//         }}
//       />
//       <Text>Hello World</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default App;

// const series = [
//   {
//     "backdrop": "https://wallpapercave.com/wp/wp5158787.jpg",
//     "description": "Ertugrul Ghazi is a historical figure dating back to the 13th century, who belonged to the 'Kayi tribe' and fought for his religion, conquering many lands in the way of Allah. He was the son of Suleyman Shah of Oghuz descent. Ertugrul's son, Osman, succeeded the throne and founded the Ottoman Empire around 1299.",
//     "genres": [
//       "Imaan",
//       "Jihaad",
//       "Suspenseful",
//       "Exciting",
//     ],
//     "key": "1",
//     "poster": "https://m.media-amazon.com/images/M/MV5BMTYwM2Y5NzMtMzQzZC00YTE5LTlmYzctMzc2M2E5NGQ2YjFjXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg",
//     "rating": 7.9,
//     "releaseDate": "2021-02-24",
//     "title": "Ertugrul Ghazi",
//   },
//   {
//     "backdrop": "https://fsa.zobj.net/crop.php?r=BdviORJUF-QpHWIu3I1E5jyWsNqFVn60IwtKu28RIeVo5CFJDGZEDPZ-MsBbvJri4n6ypomHIprPQJlN7TkJgJYLsGhUcYAoGlUDq3mcowR4ioPxGIQ1EHSrLZtCB_Cl7gMQuI5aFFRFBj3M",
//     "description": "Witness the rise of the Seljuks under Sultan MelikShah and his son Sultan Ahmed Sancar and their struggle and battle against Hasan e Sabah, leader of the Deadly Shia Assassins who look to restore the Fatimid Empire, also against the Byzantine Empire and fellow rival States who seek to weaken the Seljuks.",
//     "genres": [
//       "Awakening",
//       "Jihaad",
//       "Historical",
//       "Adventure",
//     ],
//     "key": "2",
//     "poster": "https://m.media-amazon.com/images/M/MV5BZmM5ODEyYTktMzY3Yi00NTViLTliMDItMDBhODU2MTllZjc1XkEyXkFqcGdeQXVyMTI0MjU5MzUw._V1_SX300.jpg",
//     "rating": 8,
//     "releaseDate": "2021-02-24",
//     "title": "The Great Seljuk",
//   },
//   {
//     "backdrop": "https://lh3.googleusercontent.com/proxy/0FcQY2dazQe4r3RUhhcQCrj3fM03RbxuPkx-O864O9dsz3tLAemT9hU-OaY6JMgeSovDWM28hB7tZ4ipySCwl2KooEPXJnlFEEvp",
//     "description": "Osman began his journey by forming a friendship with Yorgopolos and the Kayi tribe expanded its influence further during the reign of Osman Ghazi, but some problems will hinder Osman and he must solve it.",
//     "genres": [
//       "Historical",
//       "Adventure",
//       "Jihaad",
//       "Islamic",
//     ],
//     "key": "3",
//     "poster": "https://m.media-amazon.com/images/M/MV5BYzgwZmIwZDktNTBjYi00NWUyLTljMzAtOTYxZDgwNzgyMjYxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg",
//     "rating": 8.9,
//     "releaseDate": "2021-02-24",
//     "title": "Kurulus Usman",
//   }
// ]

// ----------------------------------------------APP.JS-----------------------------------------

// import React, { useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import admob, { MaxAdContentRating, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';  
// const usman = {"Episode 1": "944LN-hB5tA",
//   "Episode 2": "mOuiucnv6vc",
//   "Episode 3": "RyU2TYqfono"}
// const fetchdata = async () => {
//   const d = await fetch(`https://islamic-series-d79e7-default-rtdb.firebaseio.com/usman/urdudub/season1.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(usman)
//   });
// }

// const App = () => {
//   useEffect(() => {
//     admob()
//       .setRequestConfiguration({
//         // Update all future requests suitable for parental guidance
//         maxAdContentRating: MaxAdContentRating.PG,

//         // Indicates that you want your content treated as child-directed for purposes of COPPA.
//         tagForChildDirectedTreatment: true,

//         // Indicates that you want the ad request to be handled in a
//         // manner suitable for users under the age of consent.
//         tagForUnderAgeOfConsent: true,
//       })
//       .then(() => {
//         // Request config successfully set!
//       });
//       // fetchdata();
//   }, [])
//   return (
//     <View style={styles.screen}>
//       <BannerAd
//         unitId={TestIds.BANNER}
//         size={BannerAdSize.ADAPTIVE_BANNER}
//         requestOptions={{
//           requestNonPersonalizedAdsOnly: true,
//         }}
//       />
//       <Text>Hello World</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default App;

// -------------------------------------------------------------------------------


