import React, { Component } from "react";
import {
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

import OptionButton from "./Screens/Components/OptionButton";
// import Timer from "./Screens/Components/Timer";
import BottomTab from "./Screens/Components/BottomTab";
class App extends Component {
  state = {
    color: {
      opt1: {
        back: "",
        text: "#cccfd3"
      },
      opt2: {
        back: "",
        text: "#cccfd3"
      },
      opt3: {
        back: "",
        text: "#cccfd3"
      },
      opt4: {
        back: "",
        text: "#cccfd3"
      }
    },
    answer: 2
  };
  selectOption = (opt, answerid) => {
    console.log("----------------------");
    var color = this.state.color;
    console.log(answerid, this.state.answer);
    if (answerid === this.state.answer) {
      color[opt].back = "#fefefe";
      color[opt].text = "black";
      this.setState({ color: color });
    } else {
      color[opt].back = "red";
      color[opt].text = "black";

      console.log(color);
      this.setState({ color: color });
    }
    console.log(this.state.color);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#3a3f4e", flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: "center"
            }}
          >
            <Text style={styles.questionStyle}>
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book it has?
            </Text>
            <OptionButton
              selectOption={() => this.selectOption("opt1", 1)}
              styles={{ backgroundColor: this.state.color["opt1"].back }}
            >
              <Text
                style={[
                  styles.optionStyle,
                  { color: this.state.color["opt1"].text }
                ]}
              >
                Options
              </Text>
            </OptionButton>

            <OptionButton
              selectOption={() => this.selectOption("opt2", 2)}
              styles={{ backgroundColor: this.state.color["opt2"].back }}
            >
              <Text
                style={[
                  styles.optionStyle,
                  { color: this.state.color["opt2"].text }
                ]}
              >
                Options
              </Text>
            </OptionButton>

            <OptionButton
              selectOption={() => this.selectOption("opt3", 3)}
              styles={{ backgroundColor: this.state.color["opt3"].back }}
            >
              <Text
                style={[
                  styles.optionStyle,
                  { color: this.state.color["opt3"].text }
                ]}
              >
                Options
              </Text>
            </OptionButton>

            <OptionButton
              selectOption={() => this.selectOption("opt4", 4)}
              styles={{ backgroundColor: this.state.color["opt4"].back }}
            >
              <Text
                style={[
                  styles.optionStyle,
                  { color: this.state.color["opt4"].text }
                ]}
              >
                Options
              </Text>
            </OptionButton>
          </View>
          {/* <Timer /> */}
        </ScrollView>
        <View style={{ flexDirection: "column-reverse" }}>
          <BottomTab />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  optionStyle: {
    fontSize: 15,
    fontWeight: "500"
    // color: "#cccfd3"
  },
  questionStyle: {
    padding: 40,
    textAlign: "center",
    color: "#cccfd3",
    fontWeight: "500",
    fontSize: 15
  }
});
export default App;
