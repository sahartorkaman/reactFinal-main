import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";

const LocationDetailsScreen = ({ navigation, route }) => {
    if (!route.params.course) return null;

    navigation.setOptions({
        headerShown: true,
        title: route.params.course.title,
        headerTitleStyle: {
            fontFamily: "yekan",
            fontSize: RFPercentage(2.5),
            color: "white",
        },
        headerStyle: {
            backgroundColor: "#c0c5e9",
        },
    });
    console.log(route.params);
    const { _id, title, price, imageUrl, info } = route.params.course;

    return (
        <Screen style={styles.container}>
            <Card
                title={title}
                price={price}
                time="15:00:00"
                image={imageUrl}
                teacher=""
                LocationInfo={info}
            />
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("PersianCalendar")
                }

                Style={styles.style1}
            >


                <Text>انتخاب زمان</Text>

            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text>شروع بازه:{route.params.StartDate}</Text>
                <Text>پایان بازه:{route.params.EndDate}</Text>
            </View>
        </Screen>
    );
};

export default LocationDetailsScreen;

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        padding: 5
    },
    container: {
        paddingHorizontal: 10,
        backgroundColor: "#f8f4f4",
    },
});
