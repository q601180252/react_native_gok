'use strict';
let baseURL = "http://gok.butterfly.mopaasapp.com/";
// let baseURL = 'http://192.168.1.124:8080/';
let Json = {
    hero: {
        url: baseURL + 'hero',
        httpMethod: 'GET',
    },
    equip: {
        url: baseURL + 'equip',
        httpMethod: 'GET',
        params: {
            type: '',
        }
    },
    heroInfo: {
        url: baseURL + 'hero/info',
        httpMethod: 'GET',
        params: {
            id: '',
        }
    },

}

import React from 'react';
import Storage from './Storage';
var storage = new Storage();
var API = {};
API.getAPI = function (key) {
    return new Promise((resolve, reject) => {
        resolve(Json[key]);
    })
}
export default API;
