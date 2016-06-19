import React,{Component} from 'react';
import {StyleSheet,ListView,View,Text} from 'react-native';
import InfoItem from './InfoItem.js';
import {REQUIRE_USERS_URL} from '../constant/DataSource.js';

let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
class InfoList extends Component{

        state={
            dataSource:ds,
            loaded:false

        }

        componentDidMount(){
            this.getNetWorkData();
        }

        //ajax方式来获取远程输入
        getNetWorkData(){
             fetch(REQUIRE_USERS_URL).then((response)=>response.json()).then(responseData=>{
                 this.setState({
                    dataSource:ds.cloneWithRows(responseData.data),
                    loaded:true
                 });
            }).done();
        }

        render(){
            if(!this.state.loaded){
               return this.renderLoading();
            }else{
               return  this.renderList();
            }
        }

        //获取每一项的显示
        getInfoItemView(data){
            return(
             <InfoItem data={data} />
            )

        }

        renderList(){
            return(
                <ListView dataSource={this.state.dataSource} renderRow={this.getInfoItemView}>
                </ListView>
            )

        }

        renderLoading(){
            return(
                <View>
                    <Text>
                        正在加载数据....
                    </Text>
                </View>

            )
        }

}

export default InfoList;