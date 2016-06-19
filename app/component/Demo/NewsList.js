import React,{Component} from 'react';
import  {View,Text,StyleSheet,PixelRatio,Image,ListView,ScrollView,Dimensions,ProgressBarAndroid,RefreshControl} from  'react-native';
import {REQUIRE_NEWS_URL,APIKEY} from '../../constant/DataSource.js';

let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
let key="newslist";
let len=40;
let count=0;

class  NewsList extends  Component{

    state={
        dataSource:ds,
        loaded:false
    }

    render(){
         if(this.state.loaded){
             return this.loadDataView();
         }else{
             return this.loadingView();
         }
    }

    loadDataView(){
        return(
            <ListView refreshControl={this.refreshControlView()}  dataSource={this.state.dataSource} renderRow={this.renderRow} />
        )
    }

    refreshControlView(){
        return (
            <RefreshControl onRefresh={()=>this.reloadData()} refreshing={false} enabled={true} />
        )
    }

    loadingView(){
        return(
            <ProgressBarAndroid styleAttr="Inverse" />
        )
    }

    reloadData(){
       this.getData();
       this.setState({
           loaded:false
       })
    }
    renderRow(record){
        count++;
        let title=record.title;
        let titLen=title.length;
        let src={uri:record.picUrl};
        let time=record.ctime;
        return(
            <View style={styles.item}>
                <View style={styles.flex2}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.time}>
                        {time}
                    </Text>
                </View>
                <View style={styles.flex}>
                    <Image style={styles.newsImg} source={src}/>
                </View>
            </View>
        )
    }

    componentWillMount(){
        this.getData();
    }

    getData(){
        fetch(REQUIRE_NEWS_URL,{
            headers:{
                apikey:APIKEY
            }
        }).then((response)=>response.json()).then((reponseData)=>{
            this.setState({
                dataSource:ds.cloneWithRows(reponseData[key]),
                loaded:true
            })
        }).catch((error)=>{
            alert(error);
        })
    }
}

let styles=StyleSheet.create({
     item:{
         flex:1,
         justifyContent:"center",
         // height:40,
         padding:14,
         flexDirection:'row',
         borderBottomWidth:3/PixelRatio.get(),
         borderBottomColor:"#ddd",
         justifyContent:"center"
     },
    text:{
        color:'#000',
        fontSize:18,
        height:86
    },
    time:{
        textAlign:"right",
        marginRight:10
    },
    flex:{
        flex:1,
    },
    flex2:{
        flex:2
    },
    newsImg:{
        width:100,
        height:100
    }

})
export  default NewsList;