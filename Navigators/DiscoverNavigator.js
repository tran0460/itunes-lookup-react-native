import React from "react";
import ResultsScreen from "../screens/ResultsScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
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
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default DiscoverNavigator;
