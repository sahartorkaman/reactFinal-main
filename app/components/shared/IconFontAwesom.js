import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const IconFontAwesom = ({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff",
}) => {
    return (
        <View
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <FontAwesome
                name={name}
                color={iconColor}
                size={size * 0.5}
            />
        </View>
    );
};
export default IconFontAwesom;
