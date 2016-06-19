import React,{Component} from 'react';
import {StyleSheet,Text,TouchableOpacity,TouchableHighlight} from 'react-native';

class  Button extends Component{

    state={
        disabled:false
    }

    render(){
        const {text,bg,loadingText}=this.props;
        let btnText= this.state.disabled==false?text:loadingText;

        return(
            <TouchableHighlight disabled={this.state.disabled} onPress={()=>this.buttonHandler()} style={[btnStyle.button,{backgroundColor:bg},this.state.disabled&&btnStyle.disabled]}>
                <Text style={[btnStyle.btnText,this.state.disabled&&btnStyle.disabledText]}>{btnText}</Text>
            </TouchableHighlight>
        )
    }

    buttonHandler(){
        const {text,clickHandler}=this.props;
        this.disabledBtn()
        clickHandler(this.enableBtn);
        // alert("你点击了按钮 ["+text+"]");
    }

    enableBtn=()=>{
        this.changBtnState(false);
    }

    disabledBtn=()=>{
        this.changBtnState(true);
    }

    changBtnState=(state)=>{
        this.setState({
            disabled:state
        })
    }
}

let btnStyle=StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 20,
        width: 80,
        backgroundColor: '#5cb85c',
        borderColor: '#4cae4c',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop:10
    },
    btnText: {
        color: '#fff',
        fontSize:14,
        textAlign: "center"
    },
    disabled:{
        backgroundColor:"#ccc",
        // color:'#000'
    },
    disabledText:{
        color:"#000"
    }
});

export default Button