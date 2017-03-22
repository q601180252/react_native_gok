'use strict';
import React from 'react';
import {
    AsyncStorage
} from 'react-native';

export default class Storage {
  setJson(json, key) {
    let string = JSON.stringify(json);
    AsyncStorage.setItem(key, string, (errors)=>{

    });
  }
  getJson(key) {
    return new Promise((solved, reject) => {
      AsyncStorage.getItem(key, (errors, result)=>{
        if (!result) {
          reject(errors);
        } else {
          solved(JSON.parse(result));
        }
      });
    })
  }
  removeJson(key) {
    AsyncStorage.removeItem(key, string, (errors)=>{

    });
  }
}
