import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    InteractionManager,
    StatusBar,
    Platform,
    ListView,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import HttpUtil from '../../util/HttpUtil';
import API from '../../util/API';
import BaseComponent from '../../view/base/basecomponent';
import  styles from './style'
import Grid from 'react-native-grid-component';



//foot：  0 隐藏  1  已加载完成   2  显示加载中
export default class ListViewDemo extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loaded: false,
            type:this.props.type
        };
    }

    //使用该方法进行网络请求的加载
    componentDidMount() {
        //调用加载网络数据的方法
        this.fetchData();
    }

    //从网络加载数据
    fetchData() {
        var totalList = new Array();
        console.log("fetchDataequip"+this.state.type);
        API.getAPI('equip').then(result => {
            result.params.type = this.state.type;
            HttpUtil.getJson(result).then((json) => {
                console.log(json);
                if (json.errorCode == 0) {
                    for (let i = 0; i < json.data.length; i++) {
                        totalList.push(json.data[i]);
                    }
                    this.setState({
                        dataSource: totalList,
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
        return (
            <Grid
                style={styles.list}
                renderItem={this.renderRow.bind(this)}
                data={this.state.dataSource}
                itemsPerRow={3}

            />
        );
    }

    gotoInfo() {
        // super.startActivity("Info", Info);

    }

    //数据显示的样式
    renderRow(rowData, rowID) {
        return (
            <TouchableHighlight style={styles.itemViewStyle} onPress={() => this.gotoInfo() }>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri:rowData.img}} style={styles.itemIconStyle}/>
                    <Text style={styles.itemTitleStyle}>{rowData.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

}
