import { View, Text, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

import Menu from '../components/Menu';

import DonusturSvg from '../svg/DonusturSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import AnaMenu from '../components/AnaMenu';

const Haber = () => {
  const navigation = useNavigation();
  const [haberler, setHaberler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Firestore'dan 'haberler' koleksiyonundaki tüm belgeleri al
        const haberlerSnapshot = await getDocs(collection(db, 'haberler'));
        // Belge dizisini dönüştürerek verileri al
        const yeniHaberler = haberlerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Verileri state'e ayarla
        setHaberler(yeniHaberler);
        console.log("Veriler Başarıyla Alındı: ", yeniHaberler);
      } catch (error) {
        console.error('Verileri alırken bir hata oluştu:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <View>
      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#476072',
      }}>
        <AnaMenu />

        <View style={{
          backgroundColor: '#334257',
          height: '90%',
          width: '100%',
          borderRadius: 10,
          marginTop: 5
        }}>

          <Text style={{
            color: '#EEEEEE',
            marginTop: 20,
            marginBottom: -10,
            marginLeft: 30,
            fontSize: 17,
            fontWeight: '600',

          }}>Haberler</Text>

          {haberler.length === 0 ? (
            <Text>Veri bulunamadı.</Text>
          ) : (
            <ScrollView>
              {haberler.map((haber, index) => (
                <Pressable
                  key={index}
                  onPress={() => navigation.navigate('HaberDetay', { haber })}
                  style={{
                    flexDirection: 'row',
                    marginTop: 20
                  }}
                >
                  <View style={{
                    width: '56%',
                    marginLeft: 'auto',
                    height: 130,
                  }}>
                    <Text style={{
                      fontSize: 14,
                      marginTop: -25,
                      color: '#fff',
                      fontWeight: '800'
                    }}>{haber.veriler.baslik}</Text>
                    <Text style={{
                      color: '#fff',
                      fontSize: 12,
                      marginRight: 10,
                      height: '33%'
                    }}>{haber.veriler.aciklama}</Text>
                  </View>
                  <View>
                    <Image style={{ width: 120, height: 120, marginRight: 20, borderRadius: 20 }} source={{ uri: haber.veriler.img || 'https://example.com/default-image.jpg' }} />
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  )
}

export default Haber;
