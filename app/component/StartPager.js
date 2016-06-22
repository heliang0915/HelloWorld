import React,{Component} from 'react';
import  {StyleSheet,ViewPagerAndroid,Text,Image,View,Dimensions,TextInput,TouchableHighlight,TouchableOpacity} from  'react-native';

import TabBar from './Demo/TabBar.js';

var WELLCOMES=[
    require("../img/wellcome/welcome0.jpg"),
    require("../img/wellcome/welcome1.jpg"),
    require("../img/wellcome/welcome3.jpg"),
    require("../img/wellcome/welcome4.jpg"),
    require("../img/wellcome/welcome5.jpg"),
    require("../img/wellcome/welcome7.jpg"),
]

//启动引页
class  StartPager extends  Component{
    state={
        page: 0
    }
    render(){
        let _this=this;
        let pages=[];
        let pre="View";
        WELLCOMES.forEach(function (imgURL,i) {
                let temp=i+pre;
                pages.push(
                    <View key={temp}>
                        <Image key={i} style={[{width:Dimensions.get("window").width,height:Dimensions.get("window").height}]} source={imgURL}>
                            {_this.renderPage(i)}
                        </Image>
                    </View>
                )
        });
        return(
            <ViewPagerAndroid initialPage={0} onPageSelected={(event)=>this.changePage(event)}  style={styles.viewPager}>
                {pages}
            </ViewPagerAndroid>
        )
    }

    changePage(event){
        let index=event.nativeEvent.position;
        this.setState({
            page:index
        })
    }

    renderBtn(){
        return(
            <View   style={{paddingTop:160}}>
                <TouchableOpacity style={styles.btn} onPress={()=>this._onPress()}>
                    <Text style={styles.btnText}>立即开启</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderPage(index){
        let pointers=[];
        let pointerPre="pointer";
        let obj=null;
        let hide=null;
        for(var i=0;i<WELLCOMES.length;i++){
            var temp=i+pointerPre;
            obj=i==this.state.page?styles["active"]:null;
            pointers.push(
                <View key={temp}>
                    <View key={temp} style={[styles.pointer,obj,hide]}></View>
                </View>
            )
        }
        return(
            <View style={styles.pointerWrap}>
                <View style={styles.pointerInner}>
                    {index==WELLCOMES.length-1?this.renderBtn():pointers}
                </View>
            </View>
        )
    }


    _onPress(){
       const {navigator} =this.props;
        navigator.push({
            name:"Index",
            component:TabBar
        })
    }

}

var styles = StyleSheet.create({
    viewPager: {
        flex: 1
    },
    pagerImg:{

    },
    pointerWrap:{
        justifyContent:"center",
        alignItems:"flex-end",
        flexDirection:"row",
        flex:1
    },
    pointerInner:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    },
    pointer:{
        width:5,
        height:5,
        margin:5,
        backgroundColor:"#FFF",
        borderRadius:10,
        marginBottom:50
    },
    active:{
        width:10,
        height:10
    },
    btn:{
        backgroundColor:"#46b8da",
        marginBottom:50,
        flex:1,
        padding:10,
        paddingLeft:50,
        paddingRight:50,
        borderRadius:5,

    },
    btnText:{
        color:'#fff'
    }

});


export  default StartPager;

