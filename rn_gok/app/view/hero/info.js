import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity, Text
} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Video from 'react-native-video';
import HttpUtil from '../../util/HttpUtil';
import API from '../../util/API';
import Header from '../../view/header'
import BaseComponent from '../../view/base/basecomponent';
import  styles from '../../view/equip/style'
import Skill from './skill'
var UIManager = require('UIManager');
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
            rate: 0,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: false,
            play: false
        };
    }

    video: Video;

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

    onLoad = (data) => {
        this.setState({duration: data.duration});
    };

    onProgress = (data) => {
        this.setState({currentTime: data.currentTime});
    };

    onEnd = () => {
        this.setState({paused: true})
        this.video.seek(0)
    };
    playVideo(){
        console.log('playVideo')
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this.video),
            UIManager.Video.Commands.play,
            [],
        );
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
                    <TouchableOpacity onPress={() => this.playVideo() }
                    >
                        <Text>播放</Text>
                    </TouchableOpacity>
                    <Video
                        ref={(ref: Video) => {
                            this.video = ref
                        }}
                        source={{
                            uri: this.state.data.heroInfo.voice,
                            type: 'mpd'
                        }}
                        style={styles.fullScreen}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onProgress={this.onProgress}
                        onEnd={this.onEnd}
                        repeat={false}
                    />

                    <ScrollableTabView
                        renderTabBar={() => <DefaultTabBar/>}
                        tabBarActiveTextColor='#4f9bfd'
                        tabBarBackgroundColor='#ffffff'
                        tabBarUnderlineColor='#ff0000'
                        style={{
                            borderColor: '#4f9bfd'
                        }}>
                        <Skill data={this.state.data.skill} type='0' tabLabel="技能" {...this.props}/>
                        <Skill data={this.state.data.skill} tabLabel="攻击" {...this.props}/>
                        <Skill data={this.state.data.skill} tabLabel="讨论" {...this.props}/>
                    </ScrollableTabView>
                </View>
            );
        }
    }
}

