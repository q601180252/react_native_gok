import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    TouchableOpacity,
    InteractionManager,
    Platform,
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
            modalVisible: false,
            type: this.props.type,
            currentItem: {img: '1', name: '1'},
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
        console.log("fetchDataequip" + this.state.type);
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

    onRequestClose() {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        var modalBackgroundStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        };

        return (
            <View style={styles.container}>
                <Modal
                    visible={this.state.modalVisible}
                    //是否透明默认是不透明 false
                    transparent={true}
                    onRequestClose={()=> this.onRequestClose()}>

                    <View style={[styles.modelContainer,modalBackgroundStyle]}>
                        <TouchableOpacity style={styles.modelContainer} onPress={() => this.onRequestClose() }>
                            <View style={[styles.innerContainer]}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={{uri:this.state.currentItem.img}} style={{width:100,header:100}}/>
                                    <View style={{marginLeft:10}}>
                                        <Text style={styles.itemTextColor}>{this.state.currentItem.name}</Text>
                                        <Text style={[styles.itemTitleStyle,styles.itemTextColor]}>
                                            售价：{this.state.currentItem.price}
                                        </Text>
                                        <Text style={[styles.itemTitleStyle,styles.itemTextColor]}>

                                            总价：{this.state.currentItem.total_price}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={[styles.itemTitleStyle,styles.itemTextColor]}>

                                    {this.state.currentItem.des1}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </Modal>
                <Grid
                    style={styles.list}
                    renderItem={this.renderRow.bind(this)}
                    data={this.state.dataSource}
                    itemsPerRow={3}
                />
            </View>
        );
    }

    gotoInfo(item) {
        // super.startActivity("Info", Info);
        this.setState({
            modalVisible: true,
            currentItem: item
        })

    }

    //数据显示的样式
    renderRow(rowData, rowID) {
        return (
            <View style={{marginTop:10}}>
                <TouchableOpacity style={styles.itemViewStyle} onPress={() => this.gotoInfo(rowData) }>
                    <View style={styles.itemViewStyle}>
                        <Image source={{uri:rowData.img}} style={styles.itemIconStyle}/>
                        <Text style={styles.itemTitleStyle}>{rowData.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}
