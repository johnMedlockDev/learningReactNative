import React, { useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.increment) {
    case "up":
      return { ...state, counter: state.counter + action.amount };
    case "down":
      return { ...state, counter: state.counter - action.amount };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ increment: "up", amount: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ increment: "down", amount: 1 });
        }}
      />
      <Text>Current Counter:{counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
