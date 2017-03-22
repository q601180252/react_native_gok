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
import HttpUtil from '../../util/HttpUtil';
import API from '../../util/API';

import BaseComponent from '../../view/base/basecomponent';
import Grid from 'react-native-grid-component';
import  styles from '../../view/equip/style'
import  HeroInfo from './info'
/**
 **/

export default class Hero extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loaded: false
        };
    }

    //使用该方法进行网络请求的加载
    componentDidMount() {
        //调用加载网络数据的方法

        this.fetchData();
    }

    gotoInfo(rowData) {
        super.startActivity("heroInfo",HeroInfo,rowData)
    }

    //从网络加载数据
    //http://game.gtimg.cn/images/yxzj/img201606/itemimg/


    fetchData() {
        var totalList = new Array();
        API.getAPI('hero').then(result => {
            HttpUtil.getJson(result).then((json) => {
                if (json.errorCode == 0) {
                    for (let i = 0; i < json.data.length; i++) {
                        totalList.push(json.data[i]);
                    }
                    this.setState({
                        dataSource: totalList,
                        loaded: true,
                        error: false
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

    //数据显示的样式
    renderRow(rowData, rowID) {
        return (
            <TouchableHighlight style={styles.itemViewStyle} onPress={() => this.gotoInfo(rowData) }>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri:rowData.img}} style={styles.imgHeroStyle}/>
                    <Text style={styles.itemTitleStyle}>{rowData.cname}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <Grid
                style={styles.list}
                renderItem={this.renderRow.bind(this)}
                data={this.state.dataSource}
                itemsPerRow={3}
            />
        );
    }
}

