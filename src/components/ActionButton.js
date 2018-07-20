import React, { Component } from "react";
import { View, Button } from "react-native";
import PropTypes from "prop-types";

const ActionButton = ({ label, action }) => {
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

ActionButton.propTypes = {
	label: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};

export default ActionButton;
