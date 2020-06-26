import React, { Component } from "react";
import {
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import {connect} from 'react-redux';

import OptionButton from './Components/OptionButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomTab from "./Components/BottomTab";
import {addScore,nextQuestion,resetQuiz} from '../Redux/actions/actions';

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
    question:0,
    timer:15
  };
  selectOption = (opt, answerid) => {
    console.log("----------------------");
    var color = this.state.color;
    var temp=this.state.color;
    if (opt === this.props.quiz.quiz[this.props.quiz.question].answer) {
      color[opt].back = "#fefefe";
      color[opt].text = "black";
      this.props.addScore();
    } else {
      color[opt].back = "red";
      color[opt].text = "black";

      console.log(color);
    }

    this.setState({color:color})
      setTimeout(function() {
        color[opt].back = "#3a3f4e";
        color[opt].text = "#cccfd3";
        this.setState({color:color,timer:15}) 
        this.props.nextQuestion();
        this.nStart()
    }.bind(this), 1000)
  };
  nStart = () => {
    this._interval = setInterval(() => {
      if (this.state.timer == 0) {
        clearInterval(this._interval);
        this.setState({ timer: 15 });
        this.props.nextQuestion();
      } else {
        this.setState({
          timer: this.state.timer - 1
        });
      }
    }, 2000);
  };
  componentDidMount=()=>{
    this.nStart();
  }
  render() {
    var question=this.props.quiz.question;
    this.props.navigation.setOptions({
      title: this.props.quiz.subject+" "+(question+1)+" / "+this.props.quiz.quiz.length ,
      headerStyle: {
        backgroundColor: '#69738d',
      },
      headerTintColor: '#fff',
    
      headerTitleStyle: {
        alignSelf:'center'
      },
      
    })

    return (
      <View style={{ flex:1}}>
        {
          this.props.quiz.loading ? 
          (
            <ActivityIndicator></ActivityIndicator>
          )
          :
          (
            <View style={{flex:1}}>
              {
                this.props.quiz.quiz.length ==0 ?
                (
                    <View
                      style={{
                        alignItems:'center',
                        justifyContent:'center'
                      }}
                    >
                        <Icon name="frown-open" size={90} color='red'></Icon>
                        <Text style={{color:'#fff',fontSize:20}}> no quiz avalable </Text>
                 
                    </View>

                )
                :
                (
                  <ScrollView style={{ flex:1,backgroundColor: "#3a3f4e" }}>
           
                 <View>
                 {
                  question == this.props.quiz.quiz.length-1 ?
                     (
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Icon name="thumbs-up" color="white" size={120}></Icon>
                          <Text style={{color:'#fff',fontSize:25}}> Thumbs up! You Finished</Text>
                     <Text style={{color:'#fff',fontSize:25}}>Your Score : {this.props.quiz.score}</Text>

                          <TouchableOpacity
                            style={{marginTop:30,padding:20,borderWidth:1,borderColor:'#fff',borderRadius:60}}
                            onPress={()=>{
                              this.props.resetQuiz()
                              this.props.navigation.navigate('Home')

                            }}
                          >
                            <View style={{flexDirection:'row'}}>
                             <Icon name='home' size={25}></Icon>
                            <Text style={{fontSize:20}}> Home </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                     )
                     :
                     (
                        <View style={{flex:1}}>
                          <View
                                style={{
                                  flex: 1,
                                  alignItems: "center"
                                }}
                              >
                              <Text style={styles.questionStyle}>
                                {this.props.quiz.quiz[question].question}
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
                                  {this.props.quiz.quiz[question].opt1}
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
                                  {this.props.quiz.quiz[question].opt2}
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
                                  {this.props.quiz.quiz[question].opt3}
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
                                  {this.props.quiz.quiz[question].opt4}
                                </Text>
                              </OptionButton>
                            </View>

                          

                        </View>
                     )
                   }
                  </View>
                   
               </ScrollView>
                )

              }

           <View style={{ flexDirection: "column-reverse" }}>
             {
           question == this.props.quiz.quiz.length-1 ?
                     (
                      null
                     ) :
                     (
                       
                      <BottomTab timer={this.state.timer}/>
                     )  
            }
            </View>
           </View>
          )
        }

      </View>
    );
  }
}
const styles = StyleSheet.create({
  optionStyle: {
    fontSize: 18,
    fontWeight: "bold"
    // color: "#cccfd3"
  },
  questionStyle: {
    padding: 40,
    textAlign: "center",
    color: "#cccfd3",
    fontWeight: "bold",
    fontSize: 20
  }
});

const mapStateToProps = state => ({
  quiz: state.quiz,
});


const mapDispatchToProps = dispatch => ({
  addScore:()=>dispatch(addScore()),
  nextQuestion:()=>dispatch(nextQuestion()),
  resetQuiz:()=>dispatch(resetQuiz())
});

export default connect(mapStateToProps,mapDispatchToProps)(QuizScreen);