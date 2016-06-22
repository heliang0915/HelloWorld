import React from 'react';
import  {Navigator} from  'react-native';
// import IndexPage from '../Page/IndexPage.js'

class Nav extends React.Component{

    render(){
        let {defaultComponent,params}=this.props;
        if(params==undefined){
            params={};
        }

        let initRoute={
            name:'default',
            component:defaultComponent,
            params:params
        }
        return(
            <Navigator initialRoute={initRoute}
                       configureScene ={()=>{  //动画渲染
                        return Navigator.SceneConfigs.FloatFromBottomAndroid;
                   }}
                   renderScene={(route,navigator)=>this.renderSence(route,navigator)}
            />
        )
    }

    renderSence(route,navigator) {
        let Component = route.component;
        return  <Component {...route.params} navigator={navigator}/>
    }

}

export default Nav;