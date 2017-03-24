import {
    StyleSheet
} from 'react-native';
var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: '#4f9bfd',
        width: width,
        height: 50,
    },
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#F5FCFF',
        alignItems: 'center'
//上下居中
    },
    modelContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderColor: '#4f9bfd',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    topLayout: {
        width: Dimensions.get("window").width,
        height: 100,
        backgroundColor: '#FF0000',
    }
    ,
    topLayout2: {
        height: 40,
        flexDirection: 'row',
        right: 0,
        justifyContent: 'center',//横向居中
        alignItems: 'center'//上下居中
    }
    ,
    topText: {}
    ,
    topImage: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 10,
        top: 5
    }
    ,
    avaterImage: {
        marginTop: -25,
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FF1492',
    },
    layoutTab: {
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',//上下居中
        borderBottomColor: '#FF0000',
        borderBottomWidth: 0.5,
    },
    tabText: {
        textAlign: 'center',
        flex: 1,
        alignSelf: 'center',

    },
    tabLine: {
        width: 0.5,
        height: 20,
        backgroundColor: '#FF0000',
    },
    itemViewStyle: {
        alignItems: 'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 3
    },
    listStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    itemText: {
        marginTop: 5,
        color: '#333333'
    },
    itemIconStyle: {
        width: 60,
        height: 60
    },
    imgHeroStyle: {
        width: width / 3 - 10,
        height: width / 3 - 10
    },
    itemTitleStyle: {
        marginTop: 8
    },
    itemTextColor: {
        color: '#ffffff'
    },
    item: {
        flex: 1,
        height: 160,
        margin: 1
    },
    list: {
        flex: 1
    },
    heroInfoTopLayout: {
        width: width,
        height: 200,
    },
    heroInfoCover: {
        width: width,
        height: 200,
    },
    titleText: {
        fontSize: 16,
        color: '#333'
    },
    contentText: {
        marginTop: 8,
        fontSize: 14,
        color: '#333'
    }, fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
export default  styles;
