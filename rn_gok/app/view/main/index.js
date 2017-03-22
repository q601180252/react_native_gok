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

import TabMain from '../../view/tab';

const NoBackSwipe = {
    ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: {
        pop: {}
    }
};
export default class ReactNative extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'Home',
        }
    }

//     configureScene={(route) => {
//     return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
// }}
    selectTable() {
        this.setState({
            selectedTab: "12",
        })
    }

    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = TabMain;
        return (
            <View style={styles.container}>

                <Navigator
                    initialRoute={{name: defaultName, component: defaultComponent}}
                    renderScene={(route, navigator) => {
                    let Component = route.component;
                    //这个语法是把 routes.params 里的每个key作为props的一个属性，在下个页面即可用this. props.id调用
                    //navigator对象在导航容器跳转时一直存在
                    return <Component {...route.params} navigator={navigator}/>
                }} configureScene={(route, routeStack) => {
                    return NoBackSwipe
                }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
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
