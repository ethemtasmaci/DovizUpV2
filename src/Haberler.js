import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Menu from '../components/Menu';
import AltMenu from '../components/AltMenu';

const Haberler = ({ navigation }) => {
  return (
    <>
      <View style={{
        width: '100%',
        height: '100%',
      }}>
        <Menu />
        <View style={{
          width: '100%',
          height: '78.7%',
          backgroundColor: '#020205',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          opacity: 0.15,
        }} />

        <View style={{
          zIndex: 1000,
          position: 'absolute',
          marginTop: 100,
          width: '100%',
        }}>

          <TouchableOpacity 
            style={{
              width: '90%',
              height: 175,
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 16,
              borderColor: '#E7371F',
              borderWidth: 2,
              marginTop: 50,
              position: 'relative', // Add relative positioning to the parent container
            }}
            onPress={() => navigation.navigate('HaberDetay', { veri: 'Göndermek istediğiniz veri burada' })}
          >
            <Image style={{
              height: '100%',
              width: '100%',
              borderRadius: 16
            }} source={require('../img/haberlerdenemeimg.png')} />
            <View style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#000',
              opacity: 0.4,
              position: 'absolute', // Make the overlay absolute
              top: 0,
              left: 0,
              borderRadius: 16 // Add borderRadius to match the image
            }} />
            <Text style={{
              position: 'absolute', // Make the overlay absolute
              bottom: 10, // Adjust to your preference
              left: 10,
              right: 10, // Ensure the text does not overflow
              color: '#ffffff',
            }} numberOfLines={1} ellipsizeMode='tail'>
              Denemeden oluşan haber başlığı bu başlık 50 karakteri geçmemesi gerek
            </Text>
          </TouchableOpacity>

        </View>
        <AltMenu />
      </View>
    </>
  )
}

export default Haberler;
