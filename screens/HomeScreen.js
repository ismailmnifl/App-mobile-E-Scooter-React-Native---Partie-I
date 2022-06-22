import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { auth } from '../firebase'
import { coords } from '../coords'
const HomeScreen = ({navigation}) => {

 
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch(error => alert(error.message))
    }
  return (
    // <View style={styles.container}>
    <View>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 32.2944694,
        longitude: -9.237404999999999,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}


    >


      {coords && coords?.map((marker, index) => {
        const { lat: latitude, lng: longitude } = marker.geometry.location;
        return (
          <Marker
            key={index}
            coordinate={{ latitude, longitude }}
          />
        )
      })}
    </MapView>
     <View style={styles.container}>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    top: -30,
    right: -50,
    width: 150,
    position: 'absolute',

    
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
