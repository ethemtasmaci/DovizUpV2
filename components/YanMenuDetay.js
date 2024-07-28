import { View, Text, StatusBar, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import YanMenuDetaySvg from '../svg/YanMenuDetaySvg'
import CarpiSvg from '../svg/CarpiSvg'

const YanMenuDetay = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setMenuOpen] = useState(false);


  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <>
      {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}
      <View style={{
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: 'black',

      }}>
        <View style={{
          marginLeft: 'auto',
          marginRight: 5,
          marginBottom: 40
        }}>
          <TouchableOpacity onPress={() => handleMenuPress('Anasayfa')}>
            <CarpiSvg height={20} width={20} fill={'#fff'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => handleMenuPress('SikcaSorulanSorular')} style={{
          flexDirection: 'row',
          width: '100%',
          marginBottom: 20
        }}>
          <Text style={{ color: '#fff', width: 170 }}>Sıkça Sorulan Sorular</Text>
          <YanMenuDetaySvg style={{ marginRight: 'auto' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Hakkimizda')} style={{
          flexDirection: 'row',
          width: '100%',
          marginBottom: 20
        }}>
          <Text style={{ color: '#fff', width: 170 }}>Hakkımızda</Text>
          <YanMenuDetaySvg style={{ marginRight: 'auto' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('SorunBildir')} style={{
          flexDirection: 'row',
          width: '100%',
          marginBottom: 20
        }}>
          <Text style={{ color: '#fff', width: 170 }}>Sorun Bildir</Text>
          <YanMenuDetaySvg style={{ marginRight: 'auto' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Linking.openURL("https://www.ljajans.com.tr"); }} style={{
          flexDirection: 'row',
          width: '100%',
          marginBottom: 20
        }}>
          <Text style={{ color: '#fff', width: 170 }}>Geliştirici Ekipin Web Sitesi</Text>
          <YanMenuDetaySvg style={{ marginRight: 'auto' }} />
        </TouchableOpacity>


      </View>
    </>
  )
}

export default YanMenuDetay