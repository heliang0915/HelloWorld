import React,{Component} from 'react';
import  {StyleSheet,View,Text,PixelRatio} from  'react-native';

class Header extends  Component{
    render(){
        return(
            <View style={styles.flex}>
                <Text style={styles.header}>
                    <Text style={styles.f1}>网易</Text>
                    <Text style={styles.f2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        )

    }
}

let styles=StyleSheet.create({
    flex:{
      height:50,
      marginTop:25,
      alignItems:"center",
      borderBottomWidth:3/PixelRatio.get(),
      borderBottomColor:"#CD1D1C"
    },
    header:{
        fontSize:25,
        fontWeight:"bold"
    },
    f1:{
        color:"#CD1D1C"
    },
    f2:{
        color:"#FFF",
        backgroundColor:"#CD1D1C"
    }
})
export default Header;