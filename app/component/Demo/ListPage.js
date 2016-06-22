import React,{Component} from 'react';
import {View,Text,ScrollView,Dimensions} from 'react-native';
import NewsList from './NewsList.js';
import Header from './Header.js';


class  ListPage extends  Component{
    render(){
        return(
            <ScrollView contentContainerStyle={{flex:1,height:Dimensions.get("window").height}}>
                <Header />
                <NewsList />
            </ScrollView>
        )
    }
}
export default ListPage;