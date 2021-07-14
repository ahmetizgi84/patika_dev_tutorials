import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import styles from './InfoCard.style';

const InfoCard = ({visible, closeModal, user}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      backdropOpacity={0.1}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      onBackButtonPress={closeModal}>
      <View style={styles.container}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.fullname}>
          {user.first_name} {user.last_name}
        </Text>
        <Text style={styles.addr}>
          {user.address.street_address} {user.address.street_name}{' '}
          {user.address.city} {user.address.zip_code} {user.address.state}{' '}
          {user.address.country}
        </Text>
      </View>
    </Modal>
  );
};

export default InfoCard;
