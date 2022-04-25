import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, FlatList, View, ScrollView, SafeAreaView, Text, ImageBackground, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";

import { decodeToken } from "../utils/token";
import { useSelector, useDispatch } from 'react-redux'
import Icon from "../components/shared/Icon";
import ItemSeparator from "../components/shared/ItemSeparator";
import CardH from "../components/shared/CardH";
import DrawerNavigator from "../containers/DrawerNavigator";
import { SearchBar } from "react-native-screens";
import SearchbarScreen from "./SearchbarScreen";
import ListSearchScreen from "./LisrSearchScreen";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { userAction } from "../actions";
const LocationsScreen = ({ navigation }) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();


    const courses = useSelector(state => state.locations);
    useEffect(() => {
        const myFunc = async () => {
            const token = await AsyncStorage.getItem("token");

        };
        myFunc();



    }, []);



    const ItemDivider = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }


    const FlatList_Header = () => {
        return (
            <View style={{
                height: 25,
                width: "100%",
                backgroundColor: "#00B8D4",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10, backgroundColor: '#868dbe',
            }}>

                <Text style={{ fontSize: RFPercentage(2.5), color: 'white', fontFamily: 'yekan' }}>لیست دوره ها  <MaterialCommunityIcons
                    name="arrow-down-thick"
                    size={RFPercentage(3)}
                    color='white'
                />  </Text>

            </View>
        );
    }

    return (
        <Screen style={styles.container}>
            <Image source={require("../assets/IauLogo.gif")} resizeMode="center" style={styles.IauLogo} />
            {/* <DrawerNavigator /> */}


            {/* <TouchableOpacity

                onPress={navigation.openDrawer}
                Style={styles.style1}
            >


                <Icon name="airballoon" size={30} style={{

                    color: 'blue',
                    padding: 10,
                    margin: 5,
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',


                }} />

            </TouchableOpacity> */}
            <View style={styles.root}>
                <SafeAreaView >
                    <View style={styles.kk}  >
                        {/* <ImageBackground source={require("../assets/logo.png")} resizeMode="cover" style={styles.image}> */}
                        <SearchbarScreen
                            style={styles.text}
                            searchPhrase={searchPhrase}
                            setSearchPhrase={setSearchPhrase}
                            clicked={clicked}
                            setClicked={setClicked}
                        />
                        {/* </ImageBackground> */}
                    </View>


                    {(

                        <ListSearchScreen
                            searchPhrase={searchPhrase}
                            setClicked={setClicked}
                            data={courses}
                            navigation={navigation}

                        />


                    )}
                </SafeAreaView>
            </View>

            <ScrollView >
                <View >
                    <Text style={{ borderRadius: 10, backgroundColor: '#868dbe', color: 'white', textAlign: 'center', marginLeft: 10, marginBottom: 5, fontSize: RFPercentage(2.5), fontFamily: 'yekan' }}  >

                        <MaterialCommunityIcons name="arrow-left-bold" size={RFPercentage(3)}
                            color='white' />

                        پیشنهاد ویژه</Text>
                    {/* <ScrollView horizontal > */}
                    <FlatList
                        scrollEnabled={true}
                        horizontal={true}
                        data={courses}
                        keyExtractor={(course) => course._id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("LocationDetailsScreen", {
                                        course: item,
                                    })
                                }
                            >
                                <Card
                                    title={item.title}
                                    time="15:00:00"
                                    price={item.price}
                                    image={item.imageUrl}
                                    teacher=""
                                    info={item.info}
                                    stylee="0"

                                />
                            </TouchableOpacity>
                        )}
                    />
                    {/* </ScrollView> */}
                </View>

                <View >
                    <FlatList

                        ItemSeparatorComponent={ItemDivider}
                        ListHeaderComponent={FlatList_Header}

                        horizontal={false}
                        data={courses}
                        keyExtractor={(course) => course._id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("LocationDetailsScreen", {
                                        course: item,
                                    })
                                }
                            >
                                <Card
                                    title={item.title}
                                    time="15:00:00"
                                    price={item.price}
                                    image={item.imageUrl}
                                    teacher=""
                                    info={item.info}
                                    stylee="1"

                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>


            </ScrollView>

        </Screen>
    );
};

export default LocationsScreen;

const styles = StyleSheet.create({
    IauLogo: {
        width: '100%',
        height: 80,

        marginBottom: 10
    },
    kk:
    {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    image: {


        // justifyContent: "center",
        // textAlign: 'center',
        width: '100%',
        height: 130,


    },
    text: {

        justifyContent: "center",
        width: '100%'

    },
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
    container: {
        padding: 5,
        backgroundColor: "#f8f4f4",
    },
    style1: {
        marginTop: 100,
        padding: 15,

    }
});
