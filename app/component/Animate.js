import React,{Component} from 'react';
import {StyleSheet,LayoutAnimation,View,Text,TouchableOpacity} from 'react-native';

class Animate extends Component{

    componentWillMount(){
        LayoutAnimation.spring();
    }
    state={
        w:100,
        h:100
    }

    handler(){
        LayoutAnimation.spring();
        this.setState({
            w:this.state.w+15,
            h:this.state.h+15
        });
    }

    render(){
        return(
        <View style={styles.container}>
            <View style={[styles.box,{width:this.state.w,height:this.state.h}]}></View>
            <TouchableOpacity onPress={()=>this.handler()}>
                <Text>点击动画</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

let styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box:{
        backgroundColor:"red",
    }
})


export  default Animate;