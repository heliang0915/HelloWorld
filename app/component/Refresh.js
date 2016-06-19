import React,{Component} from 'react';
import {ListView,RefreshControl,View,ScrollView,Text,StyleSheet,ProgressViewIOS,ProgressBarAndroid,Dimensions} from 'react-native';

//定义数据源
let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
//发送请求的URL
let APIURI="http://mobile.weather.com.cn/data/news/khdjson.htm?_=1381891660018";

const window={
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height
}
const Container={
    window:window
}

class  Refresh extends Component{

    state={
        loaded:false,
        dataSource:ds
    }

    initState(){
        this.setState({
            loaded:false,
            dataSource:ds
        })
    }

    componentWillMount(){
        this.fetchData();
    }

    render(){
        if(this.state.loaded){
            return  this.renderHasDateView();
        }else{
            return this.renderLoading();
        }
    }

    refreshData(){
        this.initState();
        this.fetchData();
    }

    renderHasDateView(){
        return(
            <View style={styles.container}>
                <ScrollView refreshControl={this.renderRefreshView()} style={[Container.window]} >
                        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
                </ScrollView>
            </View>
        )
    }

    renderRefreshView(){
        return(
            <RefreshControl onRefresh={()=>this.refreshData()} enabled={true} refreshing={false}>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
            </RefreshControl>
        )
    }

    renderLoading(){
            return(
                <ProgressBarAndroid styleAttr="Inverse"></ProgressBarAndroid>
            )
    }

    renderRow(data){
        return(
            <View>
                <Text>
                    {data.title}
                </Text>
            </View>
        )
    }


    fetchData(){
        fetch(APIURI).then((response)=>response.json()).then((responseData)=>{

            this.setState({
                dataSource:ds.cloneWithRows(responseData.list),
                loaded:true
            })
        }).catch((error)=>{alert(error)});

    }
}


let styles=StyleSheet.create({
    container:{
        flex:1
        // height:400
    },
    loadView:{
        // height:400
    }
})
export default Refresh;