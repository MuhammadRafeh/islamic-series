/**
 * @format
 */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

const jsCode = `
  // document.getElementsByTagName("BODY")[0].style.backgroundColor='black';
  // document.getElementsByClassName("_53j5")[0].style.height="100vh";
  document.getElementsByClassName("ytp-chrome-top ytp-show-cards-title")[0].remove();
  document.getElementsByClassName("ytp-pause-overlay ytp-scroll-min")[0].remove();
  document.getElementsByClassName("ytp-youtube-button ytp-button yt-uix-sessionlink")[0].remove();
  document.getElementsByClassName("annotation annotation-type-custom iv-branding")[0].remove();
  `;

  //The great saljhuk
  const greatSaljhuk = {"Episode 1": "2188262094639710",
  "Episode 2": "109296617761719",
  "Episode 3": "111878720836842",
  "Episode 4": "145536813962375",
  "Episode 5": "210764103812507",
  "Episode 6": "212632726958978",
  "Episode 7": "214920950063489",
  "Episode 8": "216610516561199",
  "Episode 9": "221958982693019",
  "Episode 10": "226672985554952",
  "Episode 11": "231905868364997",
  "Episode 12": "236915077864076",
  "Episode 13": "197451365358318",
  "Episode 14": "201796761590445",
  "Episode 15": "206485954454859",
  "Episode 16": "259898562232394",
  "Episode 17": "265421855013398",
  "Episode 18": "220089243094530",
  "Episode 19": "224571342646320",
  "Episode 20": "229188968851224",
  "Episode 21": "283711949851055",
  "Episode 22": "239135201189934",
  "Episode 23": "243687247401396",
  "Episode 24": "130832372253162",
  "Episode 25": "253501969753257",
  "Episode 26": "263266798776774",
  "Episode 27": "316146903274226"}
  // Episode 28 

  // The great seljhuk group
  //https://www.facebook.com/The-great-saljuk-102456185111715
  
//   The great saljuk all episodes Facebook links
// Episode 1 
// https://m.facebook.com/groups/3739709416119511/permalink/3739763179447468/
// Episode 2
// https://m.facebook.com/groups/333825854567625/permalink/411405840142959/
// Episode 3
// https://m.facebook.com/groups/333825854567625/permalink/416875039596039/
// Episode 4
// https://m.facebook.com/groups/333825854567625/permalink/356654368951440/
// Episode 5
// https://m.facebook.com/groups/333825854567625/permalink/362370048379872/
// Episode 6
// https://www.facebook.com/groups/333825854567625/permalink/368206891129521/
// Episode 7
// https://m.facebook.com/story.php?story_fbid=164484875400902&id=111415547374502
// Episode 8
// https://www.facebook.com/groups/333825854567625/permalink/379108086706068/
// Episode 9
// https://m.facebook.com/groups/333825854567625/permalink/384089759541234/
// Episode 10
// https://m.facebook.com/groups/333825854567625/permalink/388348012448742/
// Episode 11
// https://m.facebook.com/groups/333825854567625/permalink/392956688654541/
// Episode 12
// https://m.facebook.com/groups/333825854567625/permalink/397335084883368/
// Episode 13
// https://m.facebook.com/groups/333825854567625/permalink/402143177735892/
// Episode 14
// https://m.facebook.com/groups/333825854567625/permalink/406103514006525/
// Episode 15
// https://m.facebook.com/groups/333825854567625/permalink/410223516927858/
// Episode 16
// https://m.facebook.com/groups/333825854567625/permalink/414223979861145/
// Episode 17
// https://m.facebook.com/groups/333825854567625/permalink/418081196142090/
// Episode 18
// https://m.facebook.com/groups/333825854567625/permalink/421883822428494/
// Episode 19
// https://m.facebook.com/groups/333825854567625/permalink/425761148707428/
// Episode 20
// https://www.facebook.com/groups/333825854567625/permalink/429512551665621/
// Episode 21
// https://www.facebook.com/groups/333825854567625/permalink/433592257924317/
// Episode 22
// https://www.facebook.com/groups/333825854567625/permalink/437507927532750/
// Episode 23
// https://www.facebook.com/groups/333825854567625/permalink/441413187142224/
// Episode 24
// https://www.facebook.com/100267575499867/videos/130832372253162/
// Episode 25
// https://www.facebook.com/groups/333825854567625/permalink/449432776340265/
// Episode 26
// https://www.facebook.com/groups/333825854567625/permalink/457480418868834/
// Episode 27
// https://www.facebook.com/groups/333825854567625/permalink/461455295138013/


// KURULUS USMAN
//URDU DUB Youtube
// season 1 
// Episode 1 944LN-hB5tA
// Episode 2 mOuiucnv6vc
// Episode 3 RyU2TYqfono


// ------------------------------------API.JS----------------------------------------------

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

// -------------------------------------------------------------------------------API.JS
