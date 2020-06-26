import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView
} from "react-native";
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MainButton from './Components/mainScreenButton';
// import { removeUserToken } from '../Redux/actions/actions';
import {getSubject} from '../Redux/actions/actions';

import SplashScreen from './SplashScreen';


class Home extends Component{
     onClick=(screen)=>{
        this.props.getSubject();
        this.props.navigation.navigate(screen)
    }


    render(){
        return(
            <View style={styles.main}>
                <ScrollView  >
                   <View style={styles.buttonContainer}>

                        <MainButton 
                            
                        onPress={()=>this.onClick('Subject')}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:25,paddingRight:30,color: "#cccfd3"}}>View Subjects</Text>
    
                                <View style={{flexDirection:'row-reverse'}}>
                                    <Icon name="book-open" size={30}  color="#cccfd3" />
                                </View>
                             </View>
                        </MainButton>
                        <MainButton onPress={()=>this.onClick('Subject')}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:25,paddingRight:30,color: "#cccfd3"}}>Give Us Feedback</Text>
    
                                <View style={{flexDirection:'row-reverse'}}>
                                    <Icon name="comment-dots" size={30}  color="#cccfd3" />
                                </View>
                             </View>
                        </MainButton>                        
                        
                   </View>
                </ScrollView>

            </View>
        )
    }
}



const mapStateToProps = state => ({
    quiz: state.quiz,
    subject:state.subject
  });
  
  
  const mapDispatchToProps = dispatch => ({
    getSubject:()=>dispatch(getSubject()),
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
        paddingTop:200,
        flex:1,
        justifyContent:'center'
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