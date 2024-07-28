import { View, Text, Image, Pressable, StyleSheet, TextInput, Button, Alert, PermissionsAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { Appbar, Portal, Modal } from 'react-native-paper';
import { deleteHaberFromFirestore } from '../firebaseConfig';

import DetaySvg from '../svg/DetaySvg';
import SilmeSvg from '../svg/SilmeSvg';
import { err } from 'react-native-svg';

const HaberEkle = ({ haber }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Ay sıfırdan başladığı için +1 ekliyoruz
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    // İstenilen biçimde tarih ve saat bilgilerini döndür
    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  const [isMenuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const ustVeri = () => {
    setMenuOpen(false);
  };


  const deleteHaberFromFirestore = async (haberId) => {
    try {

      const haberRef = doc(db, "haberler", haberId);
      
      await deleteDoc(haberRef);
      console.log("Belge başarıyla silindi.");
    } catch (error) {
      
      console.error("Belge silinirken bir hata oluştu:", error);

      throw error;
    }
  };


  return (
    <View style={{ flex: 0, marginLeft: 'auto' }}>
      <Appbar.Action
        icon={() => <DetaySvg />}
        onPress={toggleMenu}
        subtitle="Subtitle"
        style={{
          height: 20,
          width: 20,
          flex: 3
        }}
      />
      <Portal>
        <Modal visible={isMenuOpen} onDismiss={ustVeri}>
          <View style={styles.modalContainer}>
            {/* <TouchableOpacity onPress={deleteHaberFromFirestore }>
              <SilmeSvg />
            </TouchableOpacity> */}
            <View style={{
              flexDirection: 'row',
            }}>
              <Text style={{
                color: '#E4E4DF',
                fontWeight: '700',
                fontSize: 20,
                margin: 10
              }}>
                ID
              </Text>
              <Text style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 17,
                marginTop: 10
              }}>
                {haber.id}
              </Text>
            </View>

            <View style={{
              flexDirection: 'row',
            }}>
              <Text style={{
                color: '#E4E4DF',
                fontWeight: '700',
                fontSize: 20,
                margin: 10
              }}>
                Başlık:
              </Text>
              <Text style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 16,
                marginTop: 12
              }}>
                {haber.baslik}
              </Text>
            </View>

            <View style={{
              // flexDirection: 'row',
            }}>
              <Text style={{
                color: '#E4E4DF',
                fontWeight: '700',
                fontSize: 20,
                margin: 10
              }}>
                Açıklama:
              </Text>
              <Text style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 17,
                marginLeft: 10
              }}>
                {haber.aciklama}
              </Text>
            </View>

            <View style={{
              flexDirection: 'row',
            }}>
              <Text style={{
                color: '#E4E4DF',
                fontWeight: '700',
                fontSize: 20,
                margin: 10
              }}>
                Tarih:
              </Text>
              <Text style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 17,
                marginTop: 12
              }}>
                {haber.zaman}
              </Text>
            </View>

            <View style={{
              // flexDirection: 'row',
            }}>
              <Text style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 20,
                margin: 10
              }}>
                Resim
              </Text>
              <Image
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 12
                }}
                source={{
                  uri: haber.resimUrl
                }}
              />
            </View>

          </View>
        </Modal>
      </Portal>
    </View>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#476072',
    padding: 16,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
    height: 700,
  },
});

export default HaberEkle