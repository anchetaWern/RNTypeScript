import React, { Component } from "react";
import { View, Button } from "react-native";

interface ActionButtonProps {
  label: string;
  action: () => void;
}

const ActionButton: React.SFC<ActionButtonProps> = ({ label, action }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={label} onPress={action} />
    </View>
  );
};

const styles = {
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  }
};

export default ActionButton;
