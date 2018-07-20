import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

const Card = ({ image, label }) => {
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

Card.propTypes = {
	image: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

export default Card;
