import {
    StyleSheet
} from 'react-native';
var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4f9bfd',
        width: width,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerText: {
        color: '#ffffff',
        fontSize: 16,
    }

});
export default  styles;
