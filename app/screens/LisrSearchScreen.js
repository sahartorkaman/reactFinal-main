


// List.js
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import Card from "../components/shared/Card";
import CardH from "../components/shared/CardH";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
    </View>
);

// the filter
const LisrSearchScreen = ({ searchPhrase, setCLicked, data, navigation }) => {

    const filteredCourses = data.filter((course) =>
        course.title.includes(searchPhrase) || course.info.includes(searchPhrase)
    );
    // const renderItem = ({ item }) => {
    //     // when no input, show all
    //     if (searchPhrase === "") {
    //         return <Item name={item.title} details={item.info.} />;
    //     }
    //     // filter of the name
    //     if (item.title.includes(searchPhrase)) {
    //         return <Item name={item.title} details={item.info} />;
    //     }
    //     // filter of the description
    //     if (item.info.includes(searchPhrase)) {
    //         return <Item name={item.title} details={item.info} />;
    //     }

    // };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    setCLicked(false);
                }}
            >
                {searchPhrase ? (
                    <ScrollView horizontal  >
                        <FlatList
                            horizontal={true}
                            scrollEnabled={false}
                            data={filteredCourses}
                            // renderItem={renderItem}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("LocationDetailsScreen", {
                                            course: item,
                                        })
                                    }
                                >
                                    <CardH
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
                    </ScrollView>
                ) : null}

            </View>
        </SafeAreaView>
    );
};

export default LisrSearchScreen
const styles = StyleSheet.create({
    list__container: {
        margin: 10,
        // height: "85%",
        width: "100%",
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
});
