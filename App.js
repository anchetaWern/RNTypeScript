import React, { Component } from "react";
import { View, Button, Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";

import Card from "./src/components/Card";
import ActionButton from "./src/components/ActionButton";

type Props = {};
export default class App extends Component<Props> {
  state = {
    currentImage: null
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.currentImage && (
          <Card image={this.state.currentImage} label={this.state.imageLabel} />
        )}

        {this.state.currentImage && (
          <ActionButton label="Show Camera" action={this.showCamera} />
        )}

        {!this.state.currentImage && (
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={"Permission to use camera"}
            permissionDialogMessage={
              "We need your permission to use your camera phone"
            }
          />
        )}

        {!this.state.currentImage && (
          <ActionButton label="Take Picture" action={this.takePicture} />
        )}
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const data = await this.camera.takePictureAsync();
      this.setState({
        currentImage: data.uri,
        imageLabel: data.uri
      });
    }
  };

  showCamera = () => {
    this.setState({
      currentImage: null
    });
  };
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  }
};
