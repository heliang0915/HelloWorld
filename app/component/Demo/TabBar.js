import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
import ListPage from './ListPage.js';

const glypy = glypyMapMaker({
    Home: 'e900',
    Camera: 'e901',
    Stat: 'e902',
    Settings: 'e903',
    Favorite: 'e904'
});

class TabBar  extends Component{


    tabbarToggle() {
        // this.refs['myTabbar'].getBarRef().show(this.toggle);
        // this.toggle = !this.toggle;
    }
    render(){
        return(
            <Tabbar ref="myTabbar" barColor={'#FFF'}>
                <Tab name="home">
                    <IconWithBar onActiveColor="#ff404b" onInactiveColor="#ccc" label="首页" type={glypy.Home} from={'icomoon'}/>
                    <RawContent>
                        <ListPage />
                    </RawContent>
                </Tab>
                <Tab name="camera">
                    <IconWithBar onActiveColor="#ff404b" onInactiveColor="#ccc" label="实时新闻" type={glypy.Camera} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('camera')}>首页</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="stats">
                    <IconWithBar onActiveColor="#ff404b" onInactiveColor="#ccc" label="Stats" type={glypy.Stat} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('stats')}>Stats</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="favorite">
                    <IconWithBar onActiveColor="#ff404b" onInactiveColor="#ccc" label="收藏" type={glypy.Favorite} from={'icomoon'}/>
                    <RawContent>
                            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                                <Text onPress={()=>console.log('stats')}>收藏</Text>
                            </View>
                    </RawContent>
                </Tab>
                <Tab name="settings">
                    <IconWithBar onActiveColor="#ff404b" onInactiveColor="#ccc" label="设置" type={glypy.Settings} from={'icomoon'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('settings')}>设置</Text>
                        </View>
                    </RawContent>
                </Tab>
            </Tabbar>
        )
    }
}
export  default TabBar;