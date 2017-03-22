import React, {
    Component
} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Navigator, BackAndroid
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator';

const TabNavigatorItem = TabNavigator.Item;
const TAB_NORMAL_1 = require('../../images/equip.png');
const TAB_NORMAL_2 = require('../../images/equip.png');
const TAB_NORMAL_3 = require('../../images/hero.png');

const TAB_PRESS_1 = require('../../images/equip.png');
const TAB_PRESS_2 = require('../../images/equip.png');
const TAB_PRESS_3 = require('../../images/hero.png');

import Hero from '../../view/hero';
import Equip from '../../view/equip';
import Header from '../../view/header';
export default class TabMain extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'Home',
            selectedTitle: '装备',
        }
    }

    /**
     tab点击方法
     **/
    onPress(tabName, tabTitle) {
        this.setState(
            {
                selectedTab: tabName,
                selectedTitle: tabTitle
            }
        );
    }

    /**
     渲染每项
     **/
    renderTabView(title, tabName, isBadge, view) {
        var tabNomal;
        var tabPress;
        switch (tabName) {
            case 'Home':
                tabNomal = TAB_NORMAL_1;
                tabPress = TAB_PRESS_1;
                break;
            case 'search':
                tabNomal = TAB_NORMAL_2;
                tabPress = TAB_PRESS_2;
                break;
            case 'hero':
                tabNomal = TAB_NORMAL_3;
                tabPress = TAB_PRESS_3;
                break;
            default:

        }
        return (
            <TabNavigatorItem
                title={title}
                renderIcon={() => <Image style={styles.tabIcon} source={tabNomal}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={tabPress}/>}
                selected={this.state.selectedTab === tabName}
                selectedTitleStyle={{color: '#4f9bfd'}}
                onPress={() => this.onPress(tabName,title)}
            >
                {
                    view
                }

            </TabNavigatorItem>
        );
    }

    /**
     自定义tabbar
     **/
    tabBarView() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator
                    tabBarStyle={styles.tab}
                >
                    {this.renderTabView('装备', 'Home', true, <Equip {...this.props}/>)}
                    {this.renderTabView('搜索', 'search', true, <Hero {...this.props}/>)}
                    {this.renderTabView('英雄', 'hero', true, <Hero {...this.props}/>)}
                </TabNavigator>
            </View>
        );
    }


    render() {
        var tabBarView = this.tabBarView();
        return (
            <View style={styles.container}>
                <Header   {...this.props} name={this.state.selectedTitle}/>
                {tabBarView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    tab: {
        height: 52,
        alignItems: 'center',
        backgroundColor: '#f4f5f6',
    },
    tabIcon: {
        width: 25,
        height: 25,
    },
    badgeView: {
        width: 22,
        height: 14,
        backgroundColor: '#f85959',
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 5,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    badgeText: {
        color: '#fff',
        fontSize: 8,
    }
});