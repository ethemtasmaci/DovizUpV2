import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import { Appbar, Button, Menu } from 'react-native-paper';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import Menus from '../components/Menu';

// import FiltreSvg from '../svg/FiltreSvg';
import DonusturSvg from '../svg/DonusturSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import BildirimSvg from '../svg/BildirimSvg';
import KimlikSvg from '../svg/KimlikSvg';
import ParaSvg from '../svg/ParaSvg';
import TemaSvg from '../svg/TemaSvg';
import AnaMenu from '../components/AnaMenu';

const Ayarlar = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [dilVisible, setDilVisible] = useState(false);
  const [dilSelectedItem, setDilSelectedItem] = useState(null);

  const [paraVisible, setParaVisible] = useState(false);
  const [paraSelectedItem, setParaSelectedItem] = useState(null);

  const [temaVisible, setTemaVisible] = useState(false);
  const [temaSelectedItem, setTemaSelectedItem] = useState(null);

  //Yazı yerine icon gelebilir ve tasarım düzenlenecek
  const userData = [
    { id: 1, value: 'Bildirimi Açık' },
    { id: 2, value: 'Bildirimi Kapatlı' },
    // Diğer seçenekleri buraya ekleyin
  ];

  const dilData = [
    { id: 1, value: 'Türkçe' },
    // Diğer seçenekleri buraya ekleyin
  ];

  const paraData = [
    { id: 1, value: 'Türk Lirası' },
    // Diğer seçenekleri buraya ekleyin
  ];

  const temaData = [
    { id: 1, value: 'Koyu' },
    { id: 2, value: 'Açık' },
    // Diğer seçenekleri buraya ekleyin
  ];


  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    closeMenu();
  };

  const dilOpenMenu = () => setDilVisible(true);
  const dilCloseMenu = () => setDilVisible(false);

  const dilHandleSelectItem = (item) => {
    setDilSelectedItem(item);
    dilCloseMenu();
  };

  const paraOpenMenu = () => setParaVisible(true);
  const paraCloseMenu = () => setParaVisible(false);

  const paraHandleSelectItem = (item) => {
    setParaSelectedItem(item);
    paraCloseMenu();
  };

  const temaOpenMenu = () => setTemaVisible(true);
  const temaCloseMenu = () => setTemaVisible(false);

  const temaHandleSelectItem = (item) => {
    setTemaSelectedItem(item);
    temaCloseMenu();
  };

  return (
    <View style={{
      height: '100%',
      width: '100%',
      backgroundColor: '#476072',
    }}>
      <AnaMenu />
      <View style={{
        backgroundColor: '#334257',
        height: '80%',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        marginTop: 50
      }}>
        <Text style={{
          color: '#EEEEEE',
          margin: 17,
          marginBottom: 30,
          fontSize: 18,

        }}>Ayarlar</Text>

        <View>
          <View style={{
            width: '80%',
            height: 60,
            backgroundColor: '#476072',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 14,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Button onPress={openMenu}><BildirimSvg /></Button>}
            >
              {userData.map((userData) => (
                <Menu.Item
                  key={userData.value}
                  onPress={() => handleSelectItem(userData)}
                  title={userData.value}
                />
              ))}
            </Menu>
            {selectedItem && (
              <Text style={{ marginTop: 3, color: '#fff' }}>{selectedItem.value}</Text>
            )}
          </View>

          <View style={{
            width: '80%',
            height: 60,
            backgroundColor: '#476072',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 14,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
            <Menu
              visible={dilVisible}
              onDismiss={dilCloseMenu}
              anchor={<Button onPress={dilOpenMenu}><KimlikSvg /></Button>}
            >
              {dilData.map((item) => (
                <Menu.Item
                  key={item.value}
                  onPress={() => dilHandleSelectItem(item)}
                  title={item.value}
                />
              ))}
            </Menu>
            {dilSelectedItem && (
              <Text style={{ marginTop: 0, color: '#fff' }}>{dilSelectedItem.value}</Text>
            )}
          </View>

          <View style={{
            width: '80%',
            height: 60,
            backgroundColor: '#476072',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 14,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
            <Menu
              visible={paraVisible}
              onDismiss={paraCloseMenu}
              anchor={<Button onPress={paraOpenMenu}><ParaSvg /></Button>}
            >
              {paraData.map((item) => (
                <Menu.Item
                  key={item.value}
                  onPress={() => paraHandleSelectItem(item)}
                  title={item.value}
                />
              ))}
            </Menu>
            {paraSelectedItem && (
              <Text style={{ marginTop: 0, color: '#fff' }}>{paraSelectedItem.value}</Text>
            )}
          </View>


          <View style={{
            width: '80%',
            height: 60,
            backgroundColor: '#476072',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 14,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
            <Menu
              visible={temaVisible}
              onDismiss={temaCloseMenu}
              anchor={<Button onPress={temaOpenMenu}><TemaSvg /></Button>}
            >
              {temaData.map((item) => (
                <Menu.Item
                  key={item.value}
                  onPress={() => temaHandleSelectItem(item)}
                  title={item.value}
                />
              ))}
            </Menu>
            {temaSelectedItem && (
              <Text style={{ marginTop: 0, color: '#fff' }}>{temaSelectedItem.value}</Text>
            )}
          </View>

          <Text style={{
            textAlign: 'center',
            marginRight: 10,
            color: '#EEEEEE',
            marginTop: 130,
            fontWeight: '600'
          }}>
            2024 ©DövizUp Tüm Hakları Saklıdır
          </Text>
          <Text style={{
            textAlign: 'center',
            marginRight: 10,
            color: '#EEEEEE',
            marginTop: 5
          }}>
            Version: 1.2.1
          </Text>


        </View>
      </View>
    </View>
  )
}

export default Ayarlar