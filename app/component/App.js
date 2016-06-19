import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,ScrollView,Dimensions} from 'react-native';
import InfoList from './InfoList.js';
import Form from './Form.js';
// import Refresh from './Refresh.js';
import Header from './Demo/Header.js';
import NewsList from './Demo/NewsList.js';

class App extends Component{

    render(){
        return(
            <ScrollView contentContainerStyle={{flex:1,height:Dimensions.get("window").height}}>
               <Header />
               <NewsList />
           </ScrollView>
        )
    }
}
export default App;