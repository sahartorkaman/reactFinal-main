import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { StackActions } from "@react-navigation/native";
import Screen from "./../components/shared/Screen";
import Icon from "../components/shared/Icon";
import ItemSeparator from "./../components/shared/ItemSeparator";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useSelector, useDispatch } from "react-redux";
import CustomText from "../components/shared/CustomText";
import IconFontAwesom from "../components/shared/IconFontAwesom";
import { userAction } from "../actions";
import { clearUser } from "../api/users";
const AccountScreen = ({ navigation }) => {
    const [getImage, setImage] = useState(null);
    const [getUser, setUser] = useState(null);
    const dispatch = useDispatch();
    dispatch(userAction());
    const user = useSelector(state => state.user);
    console.log(user);
    const handleLogout = async () => {



        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("userId");
        dispatch(clearUser());
        //navigation.goBack();
        navigation.dispatch(StackActions.replace("Home"));
    };


    useEffect(() => {
        const CheckUser = async () => {
            const use = await AsyncStorage.getItem("userId");
            console.log(use);
            if (use != null) {
                setUser(use);
            }
            console.log("ddd");
            console.log(getUser);

        }
        const LoadingImage = async () => {
            const image = await AsyncStorage.getItem("image");
            if (image != null) {
                setImage(image);
            }

        }
        CheckUser();
        LoadingImage();
    }, [])
    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // let result = await ImagePicker.launchCameraAsync({
        //     mediaTypes: ImagePicker.MediaTypeOptions.All,
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //     quality: 1,
        // });
        console.log(result);

        if (!result.cancelled) {
            await AsyncStorage.setItem("image", result.uri);
            setImage(result.uri);
        }
    };

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <TouchableOpacity onPress={pickImage}>
                    {getImage ? (
                        <Image
                            source={{ uri: getImage }}
                            style={styles.image}
                        />
                    ) :
                        (
                            <Image
                                style={styles.image}
                                source={require("../assets/favicon.png")}
                            />
                        )
                    }
                </TouchableOpacity>
                <View style={styles.details}>
                    <CustomText fontFamily="ih" size="2">
                        {user.fullname}
                    </CustomText>
                    <CustomText
                        fontFamily="yekan"
                        size="1.5"
                        styles={styles.subTitle}
                    >
                        {user.email}
                    </CustomText>
                </View>
                <TouchableOpacity onPress={pickImage} style={styles.settings}>
                    <Icon name="account-settings" backgroundColor="tomato" />
                </TouchableOpacity>
            </View>
            <ItemSeparator height={10} />

            {getUser ? (
                <TouchableHighlight underlayColor="#f8f4f4" onPress={handleLogout}>
                    <View style={styles.container}>
                        <Icon name="logout" backgroundColor="tomato" />
                        <View style={styles.details}>
                            <CustomText fontFamily="ih" size="2">
                                خروج از حساب کاربری
                            </CustomText>
                        </View>
                    </View>
                </TouchableHighlight>
            )
                : null}
            {getUser == null ? (
                <TouchableHighlight underlayColor="#f8f4f4" onPress={() => navigation.navigate("Login")}>
                    <View style={styles.container}>
                        <IconFontAwesom name="user-circle-o" backgroundColor="tomato" />

                        <View style={styles.details}>
                            <CustomText fontFamily="ih" size="2">
                                ورود به حساب کاربری
                            </CustomText>
                        </View>
                    </View>
                </TouchableHighlight>
            )
                : null}
            {getUser == null ? (
                <TouchableHighlight underlayColor="#f8f4f4" onPress={() => navigation.navigate("Register")}>
                    <View style={styles.container}>

                        <IconFontAwesom name="user-plus" backgroundColor="tomato" />

                        <View style={styles.details}>
                            <CustomText fontFamily="ih" size="2">
                                ثبت کاربر
                            </CustomText>
                        </View>
                    </View>
                </TouchableHighlight>
            )
                : null}
        </Screen>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 35,
    },
    details: {
        marginLeft: 20,
        justifyContent: "center",
        padding: 10
    },
    subTitle: {
        color: "#6e6969",
    },
    settings: {
        alignSelf: "center",
        marginLeft: 20,
    },
});
