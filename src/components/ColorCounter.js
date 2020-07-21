import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={(params) => {
          return onIncrease();
        }}
      ></Button>
      <Button
        title={`Decrease ${color}`}
        onPress={(params) => {
          return onDecrease();
        }}
      ></Button>
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
