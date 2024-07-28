import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Menu from '../components/Menu';
import AltMenu from '../components/AltMenu';
import axios from 'axios';

const Haberler = ({navigation}) => {
  const [haberler, setHaberler] = useState([]);

  useEffect(() => {
    handlePress();
  }, []);

  const handlePress = async () => {
    try {
      const response = await axios.get('http://192.168.1.33:3030/api/news', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setHaberler(response.data);
      console.log(response.data);
      if (response.status === 200 && response.data.success) {
        console.log('Gelen yanıt:', response.data);
        console.log('Status kodu:', response.status);
      }
    } catch (error) {
      console.error('Haber verisi çekilirken bir hata oluştu', error);
      Alert.alert(
        'Hata',
        `Haber verisi çekilirken bir hata oluştu: ${error.message}`,
      );
    }
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Menu />
        <View
          style={{
            width: '100%',
            height: '78.7%',
            backgroundColor: '#020205',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            opacity: 0.15,
          }}
        />
        <ScrollView
          style={{
            zIndex: 1000,
            position: 'absolute',
            marginTop: 100,
            width: '100%',
            height: '78.7%',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 30,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            Haberler
          </Text>
          {haberler.map((haber, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: '90%',
                height: 175,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 16,
                borderColor: '#E7371F',
                borderWidth: 2,
                marginBottom: 10,
                marginTop: 20,
                position: 'relative',
              }}
              onPress={() => navigation.navigate('HaberDetay', {veri: haber})}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 16,
                }}
                source={{uri: haber.resim}}
              />
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#000',
                  opacity: 0.4,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: 16,
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  right: 10,
                  color: '#ffffff',
                }}
                numberOfLines={1}
                ellipsizeMode="tail">
                {haber.baslik}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <AltMenu renk={4} />
      </View>
    </>
  );
};

export default Haberler;
