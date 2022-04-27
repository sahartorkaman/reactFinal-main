import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    WelcomeScreen,
    LoginScreen,
    RegisterScreen,
    CourseDetailsScreen,
} from "../screens";
import TabsNavigator from "./TabsNavigator";
import LocationDetailsScreen from "../screens/LocationDetailsScreen";
import LocationsScreen from "../screens/LocationsScreen";
import DrawerNavigator from "./DrawerNavigator";
import PersianCalendar from "../screens/PersianCalender";

const StackNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                initialParams={{ successRegister: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />


            <Stack.Screen name="Home" component={TabsNavigator} />


            <Stack.Screen
                name="LocationDetailsScreen"
                component={LocationDetailsScreen}
            />
            <Stack.Screen
                name="PersianCalendar"
                component={PersianCalendar}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
