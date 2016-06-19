import React,{Component} from 'react';
import {StyleSheet,ListView,View,Text,Image} from 'react-native';

import Button from './Button.js';
let defaultPic=require('./img/timg.jpeg');


class InfoItem extends Component{

    constructor(){
        super();
        this.imgUrl="";
        this.name="";
        this.desc="";
    }


    componentWillMount(){
        let data=this.props.data;
        this.imgUrl=data.image_url;
        this.name=data.abs;
        this.desc=data.desc;
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.itemImg} source={this.imgUrl!=""?{uri:this.imgUrl}:defaultPic}/>
                <View style={styles.rightContent}>
                    <Text style={styles.rightContent_name}>
                        <Text style={styles.label}>宠物名称:</Text>{this.name}
                    </Text>
                    <Text style={styles.rightContent_name}>
                        <Text style={styles.label}>宠物描述:</Text>{this.desc}
                    </Text>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Button text="确定" bg="#5cb85c" clickHandler={()=>{alert('确定')}}/>
                        <Button text="取消" bg="#337ab7" clickHandler={()=>{alert('取消')}}/>
                    </View>
                </View>
            </View>
        )
    }

}

let styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'nowrap',
        flexDirection:'row',
        margin:10
    },
    rightContent:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    rightContent_name:{
        marginTop:0,
        marginBottom:5,
        marginLeft:10,
        textAlign:'left'
    },
    label:{
        fontWeight:"bold"
    },
    itemImg:{
        width:100,
        height:80
    }
});

export default InfoItem;