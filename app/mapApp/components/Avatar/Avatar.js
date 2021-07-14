import React from 'react';
import {Image} from 'react-native';
import styles from './Avatar.style';

import {Marker} from 'react-native-maps';

const Avatar = ({coordinate, avatarUri, onPressMarker}) => {
  return (
    <Marker coordinate={coordinate} onPress={onPressMarker}>
      <Image source={{uri: avatarUri}} style={styles.image} />
    </Marker>
  );
};

export default Avatar;
