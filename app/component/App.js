import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,ScrollView,Dimensions} from 'react-native';
import InfoList from './InfoList.js';
import Form from './Form.js';
// import Refresh from './Refresh.js';
// import Header from './Demo/Header.js';
// import NewsList from './Demo/NewsList.js';
// import TabBar from './Demo/TabBar.js';
// import Animate from './Animate.js';
import Nav from './Nav.js';
import TextIn from './TextIn.js';

// import IndexPage from '../Page/IndexPage.js'
import StartPager from './StartPager.js';
import Banner from './Banner.js';

class App extends Component{

    render(){
        return(
            <Nav defaultComponent={StartPager} />
        )
    }
}
export default App;