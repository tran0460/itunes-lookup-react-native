import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import { AppContext } from "./AppContext";
/**
 * EXPO PACKAGES:
 * react-native-safe-area-context
 */
const Tab = createBottomTabNavigator();

// Api reference: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
export default function App() {
  const baseUrl = "https://itunes.apple.com/search?";
  const createSearchQuery = ({
    term = "",
    country = "",
    media = "",
    entity = "",
    attribute = "",
    callback = "",
    limit = "",
    lang = "",
    version = "",
    explicit = "",
  }) => {
    const termQuery = term ? `term=${term.replace(" ", "+")}` : "";
    const countryQuery = country ? `&country=${country}` : "";
    const mediaQuery = media ? `&media=${media}` : "";
    const entityQuery = entity ? `&entity=${entity}` : "";
    const attributesQuery = attribute ? `&attributes=${attribute}` : "";
    const callbackQuery = callback ? `&callBack=${callback}` : "";
    const limitQuery = limit ? `&limit=${limit}` : "";
    const languageQuery = lang ? `&language=${lang}` : "";
    const versionQuery = version ? `&version=${version}` : "";
    const explicitQuery = explicit ? `&explicit=${explicit}` : "";
    return `${termQuery}${countryQuery}${mediaQuery}${languageQuery}${versionQuery}${explicitQuery}${entityQuery}${attributesQuery}${callbackQuery}${limitQuery}`;
  };
  const getData = (baseUrl, queries) => {
    try {
      fetch(`${baseUrl}${queries}`)
        .then((resp) => {
          if (resp.ok) return resp.json();
        })
        .then((data) => {
          console.log(data.results.length);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AppContext.Provider value={{ baseUrl, createSearchQuery, getData }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
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
