import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollableTabView,
    TouchableOpacity,
    TouchableHighlight,
    InteractionManager,
    StatusBar,
    Platform,
} from 'react-native';
import HttpUtil from '../../util/HttpUtil';
import API from '../../util/API';
import Header from '../../view/header'
import BaseComponent from '../../view/base/basecomponent';
import  styles from '../../view/equip/style'
/**
 **/
export default class HeroInfo extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            cname: '',
            load: false,
            data: {},
        };
    }

    componentDidMount() {
    super.componentDidMount();
        this.setState({
            cname: this.props.json.cname,
        })
        this.fetchData(this.props.json.id);
    }


    //从网络加载数据
    //http://game.gtimg.cn/images/yxzj/img201606/itemimg/


    fetchData(id) {

        API.getAPI('heroInfo').then(result => {
            result.params.id = id;
            HttpUtil.getJson(result).then((json) => {

                if (json.errorCode == 0) {
                    var tempData = json.data;
                    this.setState({
                        load: true,
                        data: tempData,
                    });
                } else {
                }
            }, (json) => {
                console.log(json);
            })
        }, error => {
            console.log("error");
        })
    }


    render() {
        if (!this.state.load) {
            return (
                <View style={styles.mainContainer}>
                    <Header {...this.props} name={this.state.cname}/>
                </View>
            );
        } else {
            return (
                <View style={styles.mainContainer}>
                    <Header {...this.props} name={this.state.cname}/>
                    <View style={styles.heroInfoTopLayout}>
                        <Image style={styles.heroInfoCover} source={{uri: this.state.data.cover[0].img}}/>
                    </View>
                </View>
            );
        }
    }
}

