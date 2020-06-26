import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
class BottomTab extends Component {
  state = {
    timer: 5
  };
  componentDidMount() {
    this.nStart();
  }
  nStart = () => {
    this._interval = setInterval(() => {
      if (this.state.timer == 0) {
        clearInterval(this._interval);
        this.setState({ timer: 0 });
        console.log("navigate here ");
      } else {
        this.setState({
          timer: this.state.timer - 1
        });
      }
    }, 1000);
  };
  render() {
    return (
      <View style={{ height: 70, justifyContent: "flex-end" }}>
        <View style={styles.container}>
          <View>
            <Icon name="flag" color="white" size={40} />
          </View>
          {/* <TouchableOpacity onPress={() => this.nStart()}>
            <Text>start</Text>
          </TouchableOpacity> */}
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={styles.circle}>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 30,
                    color: "white"
                  }}
                >
                  {this.state.timer}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Icon name="heart" color="red" size={40} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#69738d",
    borderTopWidth: 1,
    justifyContent: "flex-end"
  },
  circleContainer: {
    backgroundColor: "green"
  },
  circle: {
    // alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    borderColor: "#42464e",
    borderWidth: 4,
    backgroundColor: "#2c303b"
  }
});
export default BottomTab;
