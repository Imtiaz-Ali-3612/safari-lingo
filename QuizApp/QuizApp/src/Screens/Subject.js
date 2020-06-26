import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MainButton from './Components/mainScreenButton';
// import { removeUserToken } from '../Redux/actions/actions';
import {getQuiz, setSelectedSubject} from '../Redux/actions/actions';

import SplashScreen from './SplashScreen';


class Home extends Component{
    onClick=(id,name)=>{
        console.log(id)
        this.props.setSelectedSubject(name)
        this.props.getQuiz(id)
        this.props.navigation.navigate('Quiz')
    }


    render(){
        console.log('---------subject-----')
        console.log(this.props.subject)

        console.log(this.props.subject)
        return(

            <View style={styles.main}>
                {
                    this.props.subject.loading ? 
                    (
                        <ActivityIndicator></ActivityIndicator>
                    )
                    :
                    (
                        <ScrollView  >

                        {this.props.subject.subject.map((sub)=>{
                            return(
    
                            <View key={sub.subject_id} style={styles.buttonContainer}>
                                {console.log(sub)}
                               <MainButton onPress={()=>this.onClick(sub.subject_id,sub.subject_name)}>
                                   <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:25,paddingRight:30,color: "#cccfd3"}}>{sub.subject_name}</Text>
           
                                       <View style={{flexDirection:'row-reverse'}}>
                                           <Icon name="arrow-circle-right" size={30}  color="#cccfd3" />
                                       </View>
                                    </View>
                               </MainButton>
                               
                               
                              </View>
    
                            )
                        })}
                    </ScrollView>
    
    
                    )
                }
            </View>
        )
    }
}



const mapStateToProps = state => ({
    quiz: state.quiz,
    subject:state.subject
  });
  
  
  const mapDispatchToProps = dispatch => ({
    getQuiz:(id)=>dispatch(getQuiz(id)),
    setSelectedSubject:(data)=>dispatch(setSelectedSubject(data))
  });
const  styles=StyleSheet.create({
    button:{
        width:'30%',
        padding:10,
        paddingBottom:10
    },
    buttonContainer : {
        flexWrap:"wrap",
        alignItems:"flex-start",
        justifyContent:"center",
        //justifyContent:"space-between",
        flexDirection:"row",
    },
      main:{
        backgroundColor: "#3a3f4e",
        padding:20,
        flex:1
      }
      ,box:{
        padding:10,
        borderRadius:15,
        // backgroundColor:'#ffffff',
        flex:1,alignItems:'center',
        alignContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
            }, button:{
              width:'40%',
              padding:10,
              paddingBottom:10
          },
          buttonContainer : {
              flexWrap:"wrap",
              alignItems:"flex-start",
              justifyContent:"center",
              //justifyContent:"space-between",
              flexDirection:"row",
          },
            

  })

  export default connect(mapStateToProps,mapDispatchToProps)(Home);