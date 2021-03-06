import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {CarDetails} from "../screens/CarDetails";
import Scheduling from "../screens/Scheduling";
import SchedulingDetails from "../screens/SchedulingDetails";
import Confirmation from "../screens/Confirmation";
import MyCars from "../screens/MyCars";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export type RootStackParamList = {
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: undefined;
  Splash: undefined;
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  Confirmation: undefined;
  MyCars: undefined;
};

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Index" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
