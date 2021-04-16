// https://www.googleapis.com/youtube/v3/playlistItems?order=date&part=snippet%2C+id&playlistId=PLgirwYDDPtS1fWzj8IBUxjN07pF9Y9wdg&key=AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI&maxResults=50&pageToken=CDIQAA

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import admob, { MaxAdContentRating, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';
//youtube api key AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI
// remove ytp-chrome-top ytp-show-cards-title || ytp-pause-overlay ytp-scroll-min || ytp-youtube-button ytp-button yt-uix-sessionlink || annotation annotation-type-custom iv-branding

//https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCfiM9_Me5QJBEr0PItkbXgw&maxResults=25&key=AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLgirwYDDPtS2Tz7K6PZMYi_d8SeXQg-T5&key=AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI
const fetchdata = async () => {
  // var i;
  const data = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLgirwYDDPtS1fWzj8IBUxjN07pF9Y9wdg&key=AIzaSyDmkcJg2Ny-DosxnIHYYLwlfk_RrEMeLbI&maxResults=50&pageToken=CDIQAA");
  const response = await data.json()
  // const pageToken = response.nextPageToken
  // for (i = 0; i < 15; i++) {
    const obj = {}
  response.items.forEach(item => {

    const title = item.snippet.title.split('|')[1];
    const videoId = item.snippet.resourceId.videoId;
    console.log(title, videoId)
    obj[title] = videoId
  });

  
  
//   const  d = await fetch(`https://islamic-series-d79e7-default-rtdb.firebaseio.com/ertugrul/urdudub/season3.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });

  // } 



  // https://islamic-series-d79e7-default-rtdb.firebaseio.com/
}

const App = () => {
  useEffect(() => {
    fetchdata();
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });


  }, [])
  return (
    <View style={styles.screen}>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <Text>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
