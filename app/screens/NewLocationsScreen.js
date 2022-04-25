import React, { useContext } from "react";
import { StyleSheet, FlatList, Text, ScrollView, TextInput } from "react-native";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";
import { useSelector } from "react-redux";

const NewLocationsScreen = () => {

    const courses = useSelector(state => state.courses);
    return (
        <ScrollView keyboardShouldPersistTaps='handled'
            style={styles.container}>
            <TextInput style={styles.input} keyboardType="numeric"
                placeholder="Type here" />
        </ScrollView>
    );
};

export default NewLocationsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",
    },



    input: {
        width: 200,
        height: 50,
        borderWidth: 1,
        marginTop: 200,
        marginLeft: 100
    }
});
