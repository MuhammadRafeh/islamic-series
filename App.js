import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import admob, { MaxAdContentRating, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';  
const usman = {"Episode 1": "944LN-hB5tA",
  "Episode 2": "mOuiucnv6vc",
  "Episode 3": "RyU2TYqfono"}
const fetchdata = async () => {
  const d = await fetch(`https://islamic-series-d79e7-default-rtdb.firebaseio.com/usman/urdudub/season1.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usman)
  });
}

const App = () => {
  useEffect(() => {
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
      // fetchdata();
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
