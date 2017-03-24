import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import BaseComponent from '../../view/base/basecomponent';
import  styles from '../../view/equip/style'


var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window');
/**
 **/
export default class HeroInfo extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataLegth: 1,
            dataSource: [],
            currentKill: {'name': '1'}
        };
    }


    componentDidMount() {
        super.componentDidMount();
        var data = this.props.data;
        this.setState({
            dataLegth: data.length,
            currentKill: data[0],
            dataSource: data,
        })
    }

    selectSkill(skill) {
        this.setState({
            currentKill: skill
        })
    }

    skillList() {
        var len = this.state.dataLegth;
        var widthStyle = {
            width: width / len,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        };
        return this.state.dataSource.map((data) => {
            return (
                <TouchableHighlight onPress={() => this.selectSkill(data) }>
                    <View style={widthStyle}>
                        <Image style={{width: 30, height: 30}} source={{uri: data.img}}/>
                    </View>
                </TouchableHighlight>
            )
        })

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{flexDirection: 'row',marginTop:10}}>
                    {this.skillList()}
                </View>
                <View style={{padding: 10}}>
                    <Text style={styles.titleText}>
                        {this.state.currentKill.name}
                    </Text>
                    <Text style={[styles.contentText]}>
                        {this.state.currentKill.info}
                    </Text>
                </View>
            </View>
        );
    }
}

