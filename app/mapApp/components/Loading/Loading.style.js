import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    //left: width / 2 - 25,
    top: height / 2 - 25,
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
