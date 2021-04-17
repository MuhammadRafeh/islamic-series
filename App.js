import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Platform,
  Button,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Genres from './Genres';
import Rating from './Rating';
import LinearGradient from 'react-native-linear-gradient';

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

const Backdrop = ({ movies, scrollX }) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
      <FlatList
        data={movies.reverse()}
        keyExtractor={(item) => item.key + '-backdrop'}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
              }}
            >
              <Image
                source={{ uri: item.backdrop }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};
const mo = [
  {
    "backdrop": "https://wallpapercave.com/wp/wp5158787.jpg",
    "description": "Ertugrul Ghazi is a historical figure dating back to the 13th century, who belonged to the 'Kayi tribe' and fought for his religion, conquering many lands in the way of Allah. He was the son of Suleyman Shah of Oghuz descent. Ertugrul's son, Osman, succeeded the throne and founded the Ottoman Empire around 1299.",
    "genres": [
      "Imaan",
      "Jihaad",
      "Suspenseful",
      "Exciting",
    ],
    "key": "1",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYwM2Y5NzMtMzQzZC00YTE5LTlmYzctMzc2M2E5NGQ2YjFjXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg",
    "rating": 7.9,
    "releaseDate": "2021-02-24",
    "title": "Ertugrul Ghazi",
  },
  {
    "backdrop": "https://fsa.zobj.net/crop.php?r=BdviORJUF-QpHWIu3I1E5jyWsNqFVn60IwtKu28RIeVo5CFJDGZEDPZ-MsBbvJri4n6ypomHIprPQJlN7TkJgJYLsGhUcYAoGlUDq3mcowR4ioPxGIQ1EHSrLZtCB_Cl7gMQuI5aFFRFBj3M",
    "description": "Witness the rise of the Seljuks under Sultan MelikShah and his son Sultan Ahmed Sancar and their struggle and battle against Hasan e Sabah, leader of the Deadly Shia Assassins who look to restore the Fatimid Empire, also against the Byzantine Empire and fellow rival States who seek to weaken the Seljuks.",
    "genres": [
      "Awakening",
      "Jihaad",
      "Historical",
      "Adventure",
    ],
    "key": "2",
    "poster": "https://m.media-amazon.com/images/M/MV5BZmM5ODEyYTktMzY3Yi00NTViLTliMDItMDBhODU2MTllZjc1XkEyXkFqcGdeQXVyMTI0MjU5MzUw._V1_SX300.jpg",
    "rating": 8,
    "releaseDate": "2021-02-24",
    "title": "The Great Seljuk",
  },
  {
    "backdrop": "https://lh3.googleusercontent.com/proxy/0FcQY2dazQe4r3RUhhcQCrj3fM03RbxuPkx-O864O9dsz3tLAemT9hU-OaY6JMgeSovDWM28hB7tZ4ipySCwl2KooEPXJnlFEEvp",
    "description": "Osman began his journey by forming a friendship with Yorgopolos and the Kayi tribe expanded its influence further during the reign of Osman Ghazi, but some problems will hinder Osman and he must solve it.",
    "genres": [
      "Historical",
      "Adventure",
      "Jihaad",
      "Islamic",
    ],
    "key": "3",
    "poster": "https://m.media-amazon.com/images/M/MV5BYzgwZmIwZDktNTBjYi00NWUyLTljMzAtOTYxZDgwNzgyMjYxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg",
    "rating": 8.9,
    "releaseDate": "2021-02-24",
    "title": "Kurulus Usman",
  }
]
export default function App() {
  const [movies, setMovies] = React.useState([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const fetchData = async () => {
      // const movies = await getMovies();
      // Add empty items to create fake space
      // [empty_item, ...movies, empty_item]
      setMovies([{ key: 'empty-left' }, ...mo, { key: 'empty-right' }]);
    };

    if (movies.length === 0) {
      fetchData(movies);
    }
  }, [movies]);

  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {console.log(movies)}
      <Backdrop movies={movies} scrollX={scrollX} />
      <StatusBar hidden />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.poster) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  transform: [{ translateY }],
                  backgroundColor: 'white',
                  borderRadius: 34,
                }}
              >
                <Image
                  source={{ uri: item.poster }}
                  style={styles.posterImage}
                />
                <Text style={{ fontSize: 24 }} numberOfLines={1}>
                  {item.title}
                </Text>
                <Rating rating={item.rating} />
                <Genres genres={item.genres} />
                <Text style={{ fontSize: 12, marginBottom: 5 }} numberOfLines={3}>
                  {item.description}
                </Text>
                <Button title="WATCH NOW" onPress={() => {console.log('asd')}}/>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
}
// [{poster: 'imageurl'}]

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
