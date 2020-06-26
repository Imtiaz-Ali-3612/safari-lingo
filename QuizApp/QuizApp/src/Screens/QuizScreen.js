import React, { Component } from "react";
import {
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import {connect} from 'react-redux';

import OptionButton from './Components/OptionButton';
import BottomTab from "./Components/BottomTab";
class QuizScreen extends Component {
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
    answer: 2,
    question:0
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
    var question=this.state.question;
    question+=1;
    this.setState({question:question})
    console.log(this.state.question)
    console.log(this.state.color);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.props.quiz.loading ? 
          (
            <ActivityIndicator></ActivityIndicator>
          )
          :
          (
            
            <ScrollView style={{ backgroundColor: "#3a3f4e", flex: 1 }}>
            <View
              style={{
                flex: 1,
                alignItems: "center"
              }}
            >
              <Text style={styles.questionStyle}>
                {this.props.quiz.quiz[this.state.question].question}
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
                  {this.props.quiz.quiz[this.state.question].opt1}
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
                  {this.props.quiz.quiz[this.state.question].opt2}
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
                  {this.props.quiz.quiz[this.state.question].opt3}
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
                  {this.props.quiz.quiz[this.state.question].opt4}
                </Text>
              </OptionButton>
            </View>
            {/* <Timer /> */}
           </ScrollView>
           
          )
        }
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

const mapStateToProps = state => ({
  quiz: state.quiz,
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(QuizScreen);