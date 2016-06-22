import React,{Component} from 'react';
import  {View,Text} from  'react-native';
import  DetialPage from  './DetialPage.js';

class IndexPage extends  Component{

     _onPress(){
            const {navigator} =this.props;
           let nextRouter={
               name:'detail',
               component:DetialPage,
               params:{
                   a:'ss'
               }
           }
            navigator.push(nextRouter);
     }

    render(){
        return(
            <View stylee={{backgroundColor:"#e0f6ff"}}>
                <Text onPress={()=>this._onPress()}>文本1 </Text>
                <Text onPress={()=>this._onPress()}>文本2 </Text>
                <Text onPress={()=>this._onPress()}>文本3 </Text>
                <Text onPress={()=>this._onPress()}>文本4 </Text>
            </View>
        )
    }
}

export  default IndexPage;