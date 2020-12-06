import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game</Text>
      <View style={styles.inputContainer}>
          <Text>Pick an Object</Text>
          <TextInput />
          <View style={styles.buttonContainer}>
            <Button title='Reset' onPress={() => {}}/>
            <Button title='Confirm' onPress={() => {}}/>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15

  }
});

export default StartGameScreen;