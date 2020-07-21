import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function ListScreen() {
  const friends = [
    { name: "Friend 1", age: "Age 20" },
    { name: "Friend 2", age: "Age 120" },
    { name: "Friend 3", age: "Age 210" },
    { name: "Friend 4", age: "Age 120" },
    { name: "Friend 5", age: "Age 2120" },
    { name: "Friend 6", age: "Age 320" },
    { name: "Friend 7", age: "Age 120" },
    { name: "Friend 23", age: "Age 120" },
    { name: "Friend 34", age: "Age 2130" },
    { name: "Friend 45", age: "Age 20" },
    { name: "Friend 52", age: "Age 210" },
    { name: "Friend 65", age: "Age 210" },
    { name: "Friend 71", age: "Age 220" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => {
        return friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>{item.name + " - " + item.age} </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
