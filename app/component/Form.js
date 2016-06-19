import React,{Component} from 'react';
import {StyleSheet,ListView,View,Text,Image} from 'react-native';
import  Button from  './Button.js';
class Form extends Component{
    render() {
        return(
            <View>
                <Button  text="提交" loadingText="提交中..." bg="green" clickHandler={this.fetchData} />
            </View>
        )
    }

    fetchData(callBack){

        // alert(callBack);
        // let btn=this.refs.btn;
        // btn.disabledBtn();
        this.timer=setTimeout(()=>{
            callBack();
        },1000)

         // alert("获取数据...");
    }

    componentUnMount(){
        this.timer&&clearTimeout(this.timer);
    }

}

export default Form;