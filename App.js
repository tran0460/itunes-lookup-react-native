import { useState } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import DiscoverNavigator from "./Navigators/DiscoverNavigator";
import { AppContext } from "./AppContext";
import HouseIcon from "./components/icons/HouseIcon";
import HouseFillIcon from "./components/icons/HouseFillIcon";
import Compass from "./components/icons/Compass";
import CompassFill from "./components/icons/CompassFill";
import HomeNavigator from "./Navigators/HomeNavigator";

/**
 * EXPO PACKAGES:
 * react-native-safe-area-context
 * react-native-svg
 * expo-splash-screen
 * expo-linking
 */

const Tab = createBottomTabNavigator();

// TODO

// - Fix status bar color
// - Style details page more
// - Hide preview butotn for details screen

// Api reference: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
        currentItem,
        setCurrentItem,
      }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <HouseFillIcon /> : <HouseIcon />,
            }}
            component={HomeNavigator}
          />
          <Tab.Screen
            name="Discover"
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? <CompassFill /> : <Compass />,
            }}
            component={DiscoverNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/**
 * @exampleObject
 * {
   "wrapperType":"track",
   "kind":"song",
   "artistId":1480650970,
   "collectionId":1597240359,
   "trackId":1597240459,
   "artistName":"Martin Deejay",
   "collectionName":"2022 EDM (Best of Techno, Trance, House, Progressive & Dance Party Anthems)",
   "trackName":"Man! I Feel Like a Woman (Ultra Dance Mix)",
   "collectionCensoredName":"2022 EDM (Best of Techno, Trance, House, Progressive & Dance Party Anthems)",
   "trackCensoredName":"Man! I Feel Like a Woman (Ultra Dance Mix)",
   "collectionArtistId":331122,
   "collectionArtistName":"Various Artists",
   "artistViewUrl":"https://music.apple.com/ca/artist/martin-deejay/1480650970?uo=4",
   "collectionViewUrl":"https://music.apple.com/ca/album/man-i-feel-like-a-woman-ultra-dance-mix/1597240359?i=1597240459&uo=4",
   "trackViewUrl":"https://music.apple.com/ca/album/man-i-feel-like-a-woman-ultra-dance-mix/1597240359?i=1597240459&uo=4",
   "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/10/d0/7d/10d07de9-bdae-98b2-67eb-529ad178baca/mzaf_2021689833828306172.plus.aac.p.m4a",
   "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/ab/30/85/ab308535-6a60-2970-551d-f2022b2a187c/EDM5030.jpg/30x30bb.jpg",
   "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/ab/30/85/ab308535-6a60-2970-551d-f2022b2a187c/EDM5030.jpg/60x60bb.jpg",
   "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/ab/30/85/ab308535-6a60-2970-551d-f2022b2a187c/EDM5030.jpg/100x100bb.jpg",
   "collectionPrice":6.99,
   "trackPrice":1.29,
   "releaseDate":"2020-04-01T12:00:00Z",
   "collectionExplicitness":"notExplicit",
   "trackExplicitness":"notExplicit",
   "discCount":1,
   "discNumber":1,
   "trackCount":40,
   "trackNumber":33,
   "trackTimeMillis":247000,
   "country":"CAN",
   "currency":"CAD",
   "primaryGenreName":"Dance",
   "isStreamable":true
},
*/
