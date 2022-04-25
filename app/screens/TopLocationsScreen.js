import React, { useContext } from "react";
import { StyleSheet, FlatList, Text, TouchableWithoutFeedback, TextInput, Keyboard, View } from "react-native";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";
// import ToplearnContext from "./../contexts/ToplearnContext";
import { useSelector } from "react-redux";
const TopLocationsScreen = () => {

    const courses = useSelector(state => state.courses);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.container}>
                <TextInput style={styles.input} keyboardType="numeric"
                    placeholder="Type here" />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default TopLocationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccd2db'
    },

    input: {
        width: 200,
        height: 50,
        borderWidth: 1,
        marginTop: 200,
        marginLeft: 100
    }
});
