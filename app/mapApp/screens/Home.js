import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import useFetch from '../hooks/useFetch';

import Loading from '../components/Loading';
import Avatar from '../components/Avatar/Avatar';
import InfoCard from '../components/InfoCard/InfoCard';

const MAP_URL = 'https://random-data-api.com/api/users/random_user?size=30';

const Home = () => {
  const mapRef = useRef();
  const [user, setUser] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {data, loading, error} = useFetch(MAP_URL);

  function onMarkerPressHandler(coor, userObj) {
    modalVisibilityHandler();
    setUser(userObj);
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      //   latitudeDelta: 15,
      //   longitudeDelta: 15,
    });
  }

  function modalVisibilityHandler() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={{flex: 1}}>
      <MapView ref={mapRef} style={{flex: 1}}>
        {data?.map(
          (
            {
              address: {coordinates},
              avatar,
              first_name,
              last_name,
              username,
              address,
            },
            index,
          ) => {
            const userObj = {
              first_name,
              last_name,
              username,
              address,
            };
            return (
              <Avatar
                key={index}
                coordinate={{
                  latitude: coordinates.lat,
                  longitude: coordinates.lng,
                }}
                avatarUri={avatar}
                onPressMarker={() => onMarkerPressHandler(coordinates, userObj)}
                //title={coord.address.city}
                //description={coord.address.country}
              />
            );
          },
        )}
      </MapView>
      {user && (
        <InfoCard
          visible={isModalVisible}
          user={user}
          closeModal={modalVisibilityHandler}
        />
      )}
      {loading && <Loading />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
