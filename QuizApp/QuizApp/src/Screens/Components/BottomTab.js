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
import {nextQuestion} from '../../Redux/actions/actions';
import {connect} from 'react-redux';


class BottomTab extends Component {
  // state = {
  //   timer: 15
  // };

  // componentDidMount() {
  //   console.log('------------vompo did ----')
  //   this.setState({timer:this.props.timer})
  //   this.nStart();
  // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.quiz !== this.props.quiz || prevProps.timer !=this.props.timer) {
  //     this.setState({time:15})
  //     this.nStart();
  //   }
  // }
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.container}>
          <View style={{padding:10}}>
            <Icon name="flag" color="white" size={25} />
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
                  {this.props.timer}
                </Text>
              </View>
            </View>
          </View>
          <View style={{padding:10}}>
            <Icon name="heart" color="red" size={25} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box:{
    height: 60,
        backgroundColor: "#69738d",    
         borderTopWidth: 1,
        justifyContent: "flex-end" 
  },
  container: {
    height: 50,
    flexDirection: "row",
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
const mapStateToProps = state => ({
  quiz: state.quiz,
});


const mapDispatchToProps = dispatch => ({
  // addScore:()=>dispatch(addScore()),
  nextQuestion:()=>dispatch(nextQuestion()),
  // resetQuiz:()=>dispatch(resetQuiz())
});

export default connect(mapStateToProps,mapDispatchToProps)(BottomTab);