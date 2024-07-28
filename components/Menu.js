import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Modal, Portal, Button, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import MenuSvg from '../svg/MenuSvg'

const Menu = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setMenuOpen] = useState(false);


  const handleMenuPress = (screenName) => {
    setMenuOpen(false); // Menüyü kapat
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };

  return (
    <>
      <View style={{
        width: '100%',
        height: 100,
        left: 25,
        top: 25,
        right: 25
      }}>
            <View style={{
              margin: 0,
              flexDirection: 'row'
            }}>
              <Image style={{
                marginLeft: -10,
                height: 40,
                width: 160,
              }} source={require("../img/logoKucukTemizYeni.png")} />

              <TouchableOpacity style={{
                marginLeft: 'auto',
                marginRight: 50,
                marginTop: 12,
                marginBottom: 10,
                height: 40,
                width: 40
              }} onPress={() => handleMenuPress('YanMenuDetay')}>

                <MenuSvg />

              </TouchableOpacity>

            </View>
      </View >
    </>
  )
}

export default Menu