import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          title: "Details",
          headerBackTitle: "Homegit",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
