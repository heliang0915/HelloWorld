import React,{Component} from 'react';
import  {View,Text} from  'react-native';

class  DetialPage extends  Component{

    _onPress(){
        const {navigator,a} =this.props;
        navigator.pop();
    }

    render(){
        return(
            <View stylee={{backgroundColor:"#e0f6ff"}}>
                <Text onPress={()=>this._onPress()}>
                    详情页面 点击返回
                </Text>
            </View>
        )
    }
}
export  default DetialPage;

