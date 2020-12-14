import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Picture = () => {
  return (
    <View>
      <Image
        style={styles.largeImage}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  smallImage: {
    width: 50,
    height: 50,
  },
  largeImage: {
    width: 80,
    height: 80,
  },
});

export default Picture;
