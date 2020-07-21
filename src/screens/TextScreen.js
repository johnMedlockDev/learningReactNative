import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      <Text>My name is {name}</Text>
      {password.length < 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
