import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}> HomeScreen </Text>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text>Go to Components Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ImageScreen")}>
        <Text>Go to ImageScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CounterScreen")}>
        <Text>Go to CounterScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ColorScreen")}>
        <Text>Go to ColorScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SquareScreen")}>
        <Text>Go to SquareScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("TextScreen")}>
        <Text>Go to TextScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
