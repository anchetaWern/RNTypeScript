import React, { Component } from "react";
import { View, Text, Image } from "react-native";

interface CardProps {
  image: string;
  label: string;
}

const Card: React.SFC<CardProps> = ({ image, label }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: image }}
        resizeMode={"contain"}
        style={styles.preview}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = {
  cardContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  label: {
    fontWeight: "bold"
  },
  preview: {
    width: 300,
    height: 300
  }
};

export default Card;
