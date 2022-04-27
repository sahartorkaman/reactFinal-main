import React, { useEffect } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import Toast from "react-native-tiny-toast";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "./../components/shared/Screen";

import { loadingToast } from "../utils/toasts";
import { useDispatch } from "react-redux";
import { getLocations } from '../actions/index';
import LocationsScreen from "../screens/LocationsScreen";
import NewLocationsScreen from "../screens/NewLocationsScreen";
import TopLocationsScreen from "../screens/TopLocationsScreen";
// import PersianCalendar from "../screens/PersianCalender";
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        try {
            const fetchData = async () => {
                loadingToast("در حال بارگذاری...");
                dispatch(getLocations());
                Toast.hide();
            };
            fetchData();
        } catch (err) {
            console.log(err);
            Toast.hide();
        }
    }, []);

    return (

        <Screen>
            <TopTab.Navigator
                initialRouteName="AllLocations"
                backBehavior="none"
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                    labelStyle: {
                        fontFamily: "ih",
                        fontSize: RFPercentage(2),
                    },
                    style: { backgroundColor: "#f8f4f4" },
                }}
            >
                <TopTab.Screen
                    name="AllLocations"
                    component={LocationsScreen}
                    options={{ tabBarLabel: "همه دوره ها" }}
                />
                <TopTab.Screen
                    name="NewLocations"
                    component={NewLocationsScreen}
                    options={{ tabBarLabel: "دوره های جدید" }}
                />
                <TopTab.Screen
                    name="TopLocations"
                    component={TopLocationsScreen}
                    options={{ tabBarLabel: "دوره های محبوب" }}
                />
                {/* <TopTab.Screen
                    name="PersianCalendar"
                    component={PersianCalendar}
                    options={{ tabBarLabel: "تست" }}
                /> */}
            </TopTab.Navigator>
        </Screen>

    );
};

export default TopTabNavigator;
