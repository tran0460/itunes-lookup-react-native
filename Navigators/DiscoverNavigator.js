import React from "react";
import ResultsScreen from "../screens/ResultsScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const DiscoverNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        options={({ route }) => ({
          headerShown: true,
          title: route.params?.title,
          headerBackTitle: "Back",
        })}
      />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default DiscoverNavigator;
