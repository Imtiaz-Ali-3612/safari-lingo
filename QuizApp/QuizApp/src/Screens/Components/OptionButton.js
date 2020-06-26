import React, { Component } from "react";
import {
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from "react-native";



class App extends Component {
  render() {
    return (
      <View style={[this.props.styles, styles.optionButton]}>
        <TouchableOpacity onPress={this.props.selectOption}>
          {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  optionButton: {
    padding: 10,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#535a68",
    marginTop: 5,
    width: "80%"
  }
});
export default App;
