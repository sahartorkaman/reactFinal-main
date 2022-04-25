import React, { useState, useEffect } from "react";
import { I18nManager, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import getFonts from "./app/utils/fonts";
// import { AppLoading } from "expo";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import { Provider } from 'react-redux';
import { store } from './app/store/index';
import AnimatedSplash from "react-native-animated-splash-screen";

import DrawerNavigator from "./app/containers/DrawerNavigator";
import StackNavigator from "./app/containers/StackNavigator";
//* Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
const getFonts = () =>
    Font.loadAsync({
        yekan: require("././app/assets/fonts/byekan.ttf"),
        ih: require("././app/assets/fonts/ih.ttf"),
    });
const App = () => {

    const [loading, setLoading] = useState(false);
    const [fontLoading, setFontLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);
    if (fontLoading) {
        return (
            <AnimatedSplash
                translucent={true}
                isLoaded={loading}
                logoImage={require("./app/assets/logoo.png")}

                backgroundColor={"lightgrey"}
                logoHeight={250}
                logoWidth={250}
                style={{ borderRadius: 90 }}
            >
                <View style={{ flex: 1, direction: 'rtl' }}>

                    <NavigationContainer>
                        <Provider store={store}>
                            <StackNavigator />
                            {/* <DrawerNavigator /> */}
                        </Provider>

                    </NavigationContainer>
                </View>
            </AnimatedSplash>

        );
    } else {
        return (
            <Apploading
                startAsync={getFonts}
                onFinish={() => {
                    setFontLoading(true);
                }}
                onError={console.warn}
            />
        );
    }
};

export default App;
