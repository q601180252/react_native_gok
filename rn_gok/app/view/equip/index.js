import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    InteractionManager,
    StatusBar,
    Platform,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import styles from './style';
import BaseComponent from '../../view/base/basecomponent';
import Frg from "./frg";


/**
 **/
export default class Equip extends BaseComponent {

    componentDidMount() {
    }


    // '#4f9bfd'
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarActiveTextColor='#4f9bfd'
                    tabBarBackgroundColor='#ffffff'
                    tabBarUnderlineColor='#ff0000'
                    style={{borderColor:'#4f9bfd'}}
                >
                    <Frg type='0' tabLabel="全部" {...this.props}/>
                    <Frg type='1' tabLabel="攻击" {...this.props}/>
                    <Frg type='2' tabLabel="法术" {...this.props}/>
                    <Frg type='3' tabLabel="防御" {...this.props}/>
                    <Frg type='4' tabLabel="移动" {...this.props}/>
                    <Frg type='5' tabLabel="打野" {...this.props}/>
                </ScrollableTabView>
            </View>
        );
    }
}
