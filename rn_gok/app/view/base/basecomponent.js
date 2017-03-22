import React, {Component} from 'react';
import {
    InteractionManager,
    BackAndroid,
} from 'react-native';

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
    }

    //跳转页面
    startActivity(name,view) {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                name: name,
                component: view,
            })
        });
    }
    //Android 返回键
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
        const nav = this.props.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        return false;
    };
}