import React,{Component} from 'react';
import  {StyleSheet,Image,Text,View,TextInput,TouchableOpacity,Dimensions} from  'react-native';


class   TextIn extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri:"http://i.imgur.com/rVekwfn.jpg"}} style={{flex:1,justifyContent:"center", height:Dimensions.get("window").height}} >
                    <View style={styles.fieldContainer}>
                        <Text style={[styles.item,styles.text]}>用户名:</Text>
                        <TextInput style={[styles.textInput]} underlineColorAndroid="#FFF" placeholderTextColor="#FFF" placeholder="请输入用户名..." />
                    </View>
                    <View style={styles.fieldContainer}>
                        <Text style={[styles.item,styles.text]}>密&nbsp;码:</Text>
                        <TextInput password={true} underlineColorAndroid="#FFF" style={[styles.textInput]} placeholderTextColor="#FFF" placeholder="请输入密码..." />
                    </View>
                     <View style={[styles.fieldContainer,styles.flexDirection]}>
                        <TouchableOpacity style={[styles.button,styles.login]}>
                           <Text style={styles.btnText}  onPress={()=>{
                                const {navigator}=this.props;
                                navigator.pop();
                           }} >登录</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        )
    }
}

let styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    fieldContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        marginRight:10,
        marginTop:15
    },
    flexDirection:{
       flexDirection:"column",
       alignItems:"stretch",
       marginTop:30
    },
    item:{
        textAlign:"right"
    },
    text:{
        borderWidth:3,
        borderColor:'#FFF',
        flex:1,
        fontSize:16,
        marginTop:15,
        color:"#FFF"
    },
    textInput:{
        flex:3,
        height:45,
        borderColor:"#FFF",
        color:"#FFF",
        borderWidth:3
    },
    button:{
        flex:1,
        borderRadius:5,
        paddingTop:15,
        paddingBottom:15,
        // marginBottom:20,
        // marginLeft:20,
        // marginRight:20,
        margin:20,
        flexDirection:'column',

    },
    login:{
        backgroundColor:"#449d44",

    },
    reg:{
        backgroundColor:"#31b0d5"
    },
    btnText:{
        color:"#FFF",
        textAlign:"center",
        fontSize:16
    }
});

export  default TextIn;