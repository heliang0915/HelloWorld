import React,{Component} from 'react';
import  {View,Text,StyleSheet,PixelRatio,Image,ListView,ScrollView,Dimensions,ProgressBarAndroid,RefreshControl,InteractionManager} from  'react-native';
import {REQUIRE_NEWS_URL,APIKEY} from '../../constant/DataSource.js';
import {LOADSTATE} from '../../constant/Constant.js';

let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
let key="newslist";

let total=0;
let currentCount=0;
let data=[];
let page=1;

class  NewsList extends  Component{
    state={
        dataSource:ds,
        loaded:LOADSTATE.Loading
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
            <ListView onEndReachedThreshold={70}  pageSize={1} renderFooter={()=>this.loadMoreView()}  onEndReached={()=>this.loadMore()} contentContainerStyle={{paddingBottom:90}} refreshControl={this.refreshControlView()}  dataSource={this.state.dataSource} renderRow={this.renderRow} />
        )
    }

    loadMore(){


        InteractionManager.runAfterInteractions(() => {
            if(this.state.loaded==LOADSTATE.Loaded){
                this.getData();
                this.setState({
                    loaded:LOADSTATE.LoadMore
                });
            }
        });


    }

    loadMoreView(){
        // if(this.state.loaded==LOADSTATE.Loaded){
            page++;
            if(this.state.loaded==LOADSTATE.LoadMore){
                return(
                    <View style={styles.more}>
                        <ProgressBarAndroid style={styles.moreLoading}  styleAttr="SmallInverse" />
                        <Text style={styles.moreText}>
                            加载更多...
                        </Text>
                    </View>
                )
            }
        // }
    }

    refreshControlView(){
        return (
            <RefreshControl onRefresh={()=>this.reloadData()} refreshing={false} enabled={true} />
        )
    }

    loadingView(){
        return(
            <ProgressBarAndroid style={{marginTop:100}} styleAttr="Inverse" />
        )
    }

    reloadData(){
        InteractionManager.runAfterInteractions(() => {
            this.getData();
        });
       this.setState({
           loaded:false
       })
    }
    renderRow(record){
        let title=record.title;
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
        InteractionManager.runAfterInteractions(() => {
            this.getData();
        });
    }

    getData(){
        fetch(REQUIRE_NEWS_URL+"&page="+page,{
            headers:{
                apikey:APIKEY
            }
        }).then((response)=>response.json()).then((reponseData)=>{
            total=reponseData[key].length;
            if(this.state.loaded==LOADSTATE.LoadMore){
                data=data.concat(reponseData[key]);
            }else{
                page=0;
                data=reponseData[key];
            }
            this.setState({
                dataSource:ds.cloneWithRows(data),
                loaded:LOADSTATE.Loaded
            })
        }).catch((error)=>{
            return this.renderErrorView(error)
        })
    }

    renderErrorView(error){
        return (
            <View>
                <Text>
                   亲~出现错误了  {error}
                </Text>
            </View>

        )
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
         borderBottomColor:"#ddd"
     },
    text:{
        color:'#000',
        fontSize:18,
        height:86,
        marginRight:10
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
    },
    more:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    moreLoading:{
        marginTop:10,marginRight:10
    },
    moreText:{
        textAlign:"center",
        color:"#ccc",
        marginTop:10,
        fontSize:16
    },


})
export  default NewsList;