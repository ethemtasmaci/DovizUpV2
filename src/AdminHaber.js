import { View, Text, Image, Pressable, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native'
import { Appbar, Portal, Modal } from 'react-native-paper';
import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

import Menu from '../components/Menu';
import AdminHaberDetay from '../components/AdminHaberDetay';

import FiltreSvg from '../svg/FiltreSvg';
import DonusturSvg from '../svg/DonusturSvg';
import HaberEkle from '../components/HaberEkle';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import ApiFirebaseHaber from '../components/ApiFirebaseHaber';

const AdminHaber = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSave, setisSave] = useState(false);
  const [isDate, setIsDate] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selectedHaber, setSelectedHaber] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'haberler'));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setAllData(data);
      } catch (error) {
        console.error('Veri getirme hatası:', error);
      }
    };

    fetchData();
  }, []);



  const postdate = async () => {
    const alldate = []
    try {
      const querySnapshot = await getDocs(collection(db, "haberler"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`); Bu kod verinin türünü gösteriyor Object veya başka bi şey dönebiliyor ona göre hareket edebiliyoruz
        // setIsDate([...isDate, doc.data()])
        alldate.push(doc.data())
      });
      setIsDate(alldate)
    } catch (error) {

    }
  }

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

  const handleMenuPress = (screenName) => {
    setMenuOpen(false); // Menüyü kapat
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <View style={{
      height: '100%',
      width: '100%',
      flex: 1,
      zIndex: 10,
      backgroundColor: '#476072',
    }}>
      <View style={{
        backgroundColor: '#476072',
        marginTop: 15,
        flexDirection: 'row',
        padding: 10,
      }}>
        <Menu />
        <Image
          style={{
            margin: 7,
            height: 30,
            width: 100,
          }}
          source={require('../img/logokucuk.png')}
        />
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('HesapMakinasi')}>
            <HesapMakinasiSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('Donustur')}>
            <DonusturSvg />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        backgroundColor: '#334257',
        height: 750,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        marginTop: 40,
      }}>
        <View style={{
          flexDirection: 'row',
        }}>
          <Text style={{
            color: '#EEEEEE',
            margin: 15,
            fontSize: 18,

          }}>Admin Haber</Text>

          <HaberEkle />

        </View>
        <View style={{
          flexDirection: 'row',
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderBottomColor: '#fff',
          borderBottomWidth: 1,
        }}>

          <Text style={{
            color: '#fff',
            fontWeight: '700',
            marginRight: 20,
            marginLeft: 10
          }}>
            ID(Index)
          </Text>

          <Text style={{
            color: '#fff',
            fontWeight: '700',
            marginRight: 92
          }}>
            Başlık
          </Text>

          <Text style={{
            color: '#fff',
            fontWeight: '700',
            marginRight: 20
          }}>
            Ekleme Tarihi
          </Text>
        </View>
        <ScrollView>
          <View style={{ width: '100%', marginTop: 15 }}>
            {allData.map((item, index) => (
              <View key={index} style={{ marginBottom: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                  <Text style={{ color: '#fff', fontWeight: '700', flex: 1, marginLeft: 5 }}>
                    {index}
                  </Text>
                  <Text style={{ color: '#fff', fontWeight: '700', flex: 3, marginLeft: 30 }}>
                    {item.baslik}
                  </Text>
                  <Text style={{ color: '#fff', fontWeight: '700', flex: 2, textAlign: 'right' }}>
                    {formatDate(item.zaman)}
                  </Text>
                  <AdminHaberDetay haber={item} />
                </View>
              </View>
            ))}
          </View>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('ApiFirebaseHaber')}>
            <Text style={{color:'#fff'}}> ApiFirebaseHaber </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('ApiFirebase')}>
            <Text style={{color:'#fff'}}> ApiFirebase </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('ApiFirebaseDetay')}>
            <Text style={{color:'#fff'}}> ApiFirebaseDetay </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}


export default AdminHaber