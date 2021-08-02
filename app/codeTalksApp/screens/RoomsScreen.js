import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Pressable,
  Button,
} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {FloatButton, CustomModal} from '../components';
import contentDataParser from '../utils/contentDataParser';
import PushNotification from 'react-native-push-notification';

const numOfColumns = 2;

const RoomsScreen = ({navigation}) => {
  const [customModalVisible, setCustomModalVisible] = React.useState(false);
  const [roomList, setRoomList] = React.useState([]);

  React.useEffect(() => {
    createNotificationChannel();
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = contentDataParser(contentData || {});
        setRoomList(parsedData);
      });
  }, []);

  const createNotificationChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel-id',
      channelName: 'Test-Channel',
    });
  };

  function handleCustomModal() {
    setCustomModalVisible(false);
  }

  function handleSendcontent(content) {
    sendContent(content);
    handleCustomModal();
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref('rooms/').push(contentObject);
  }

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('Chat', {item: item})}
        style={styles.listItemContainer}>
        <Text style={styles.listItemText}>{item.text}</Text>
      </Pressable>
    );
  };

  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'test-channel-id',
      title: 'Notification Title',
      message: 'Hello from notification message',
      bigText:
        'This is a bigtext which contains large amount of data described',
      color: 'green',
      //id: 1,
    });

    PushNotification.localNotificationSchedule({
      channelId: 'test-channel-id',
      title: 'Alarm',
      message: 'You clicked notification button 20 seconds ago',
      date: new Date(Date.now() + 20 * 1000),
      allowWhileIdle: true,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <FlatList
        data={roomList}
        renderItem={renderItem}
        numColumns={numOfColumns}
      />

      <FloatButton onPress={() => setCustomModalVisible(!customModalVisible)} />

      <Button title="Show Notification" onPress={handleNotification} />

      <CustomModal
        visible={customModalVisible}
        onClose={handleCustomModal}
        onSend={handleSendcontent}
        placeHolder="Oda adı gir..."
      />
    </View>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItemContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ECEFF1',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    elevation: 1,
  },
  listItemText: {
    color: '#FF6F00',
    fontSize: 24,
  },
});

const dummy = [
  {
    id: '1',
    name: 'React',
  },
  {
    id: '2',
    name: 'Vue',
  },
  {
    id: '3',
    name: 'React Native',
  },
  {
    id: '4',
    name: 'Angular',
  },
  {
    id: '5',
    name: 'Svelte',
  },
];
