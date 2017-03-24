import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import BaseComponent from '../../view/base/basecomponent';

/**
 **/
export default class Header extends BaseComponent {

    componentDidMount() {}

    // '#4f9bfd'
    render() {
        var name = this.props.name;
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{name}</Text>
            </View>

        );
    }
}
