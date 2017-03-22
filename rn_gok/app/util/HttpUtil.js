var HttpUtil = {};

/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
HttpUtil.get = function (url, params) {
    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            headers: {"DAIWAN-API-TOKEN": "C152A-AC91C-25CDD-CA19A"},
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
}


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @returns {Promise}
 */
HttpUtil.post = function (url, formData) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
}
/**
 * 基于 fetch 封装的 DELETE  FormData 表单数据
 * @param url
 * @param formData
 * @returns {Promise}
 */
HttpUtil.del = function (url, formData) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'DELETE',
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
}
HttpUtil.getJson = function (json) {
    let params = json.params;
    let url = json.url;
    let headers = json.headers;

    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    console.log(url);
    return new Promise(function (resolve, reject) {
        fetch(url, {
            headers: headers,
            method: 'GET',
        })
            .then((response) => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject({status: response.status})
                }
            })
            .catch((err) => {
                console.log(err);
                reject({status: -1});
            })
    })
}
HttpUtil.post = function (json) {
    let formData = json.params;
    let url = json.url;
    let headers = json.headers;

    if (headers['Content-Type'] != 'multipart/form-data') {
        Object.assign(headers, {"Content-Type": "application/x-www-form-urlencoded"});
    }
    var body = '';
    if (formData && headers['Content-Type'] != 'multipart/form-data') {
        let paramsArray = [];
        Object.keys(formData).forEach(key => paramsArray.push(key + '=' + formData[key]));
        body = paramsArray.join('&');
    } else {
        let form = new FormData();
        Object.keys(formData).forEach((item) => {
            form.append(item, formData[item]);
        });
        body = form;
    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: body,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
}
export default HttpUtil;
