import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import Menu from '../components/Menu';
import DonusturSvg from '../svg/DonusturSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import AnaMenu from '../components/AnaMenu';

const IletisimForm = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    selectedOption: null
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    // E-posta adresi geçerli mi kontrolü
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      Alert.alert('Geçersiz E-posta', 'Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    axios.post('http:/10.110.4.29:3030/api/gmail', formData)
      .then(response => {
        Alert.alert('Bizimle, iletişime geçtiğiniz için teşekkür ederiz.');
        // Formu temizle
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: '',
          selectedOption: null
        });
      })
      .catch(error => {
        Alert.alert('Error', 'Ufak bir sorunla karşılaştık. En yakın zamanda çözeceğiz :).', error);
        console.log("İletişim hatası: ", error);
      });
  };

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
          height: '80%',
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 8,
          marginTop: 50
        }}>
          <Text style={{
            color: '#EEEEEE',
            marginTop: 40,
            fontSize: 22,
            fontWeight: '800',
            textAlign: 'center'
          }}>
            İletişim
          </Text>
          <Text style={{
            color: '#EEEEEE',
            margin: 15,
            marginLeft: 40,
            width: '80%',
            marginRight: 'auto'
          }}>
            Bizim için sizin düşünceleriniz çok önemli bizle paylaşabilirsiniz.
          </Text>
          <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
            <TextInput
              placeholder="Ad Soyad"
              placeholderTextColor='#B4B4B8'
              style={{
                borderWidth: 1,
                color: '#fff',
                borderColor: '#fff',
                borderRadius: 8,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 10,
              }}
              onChangeText={text => handleInputChange('name', text)}
              value={formData.name}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor='#B4B4B8'
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 8,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 10,
              }}
              onChangeText={text => handleInputChange('email', text)}
              value={formData.email}
            />
            <TextInput
              placeholder="Telefon"
              placeholderTextColor='#B4B4B8'
              keyboardType="numeric"
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                color: '#fff',
                borderRadius: 8,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 10,
              }}
              onChangeText={text => handleInputChange('phone', text)}
              value={formData.phone}
            />

            <View>
              <Text style={{ color: '#fff', marginTop: 10 }}>Konu Nedir?</Text>
              <View style={{ borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden' }}>
                <RNPickerSelect
                  value={formData.selectedOption}
                  onValueChange={(value) => handleInputChange('selectedOption', value)}
                  items={[
                    { label: 'Para birimi karşılaştırma', value: 'Para birimi karşılaştırma' },
                    { label: 'Para birimleri', value: 'Para birimleri' },
                    { label: 'Haberler sayfası', value: 'Haberler sayfası' },
                    { label: 'Öneriler', value: 'Öneriler' },
                    { label: 'Hatalar', value: 'Hatalar' },
                  ]}
                />
              </View>
            </View>

            <TextInput
              placeholder="Açıklama"
              placeholderTextColor='#B4B4B8'
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                color: '#fff',
                borderRadius: 8,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 10,
              }}
              onChangeText={text => handleInputChange('description', text)}
              value={formData.description}
              multiline={true}
              numberOfLines={4}
            />
            <Button textColor='#EEEEEE' buttonColor='#476072' mode="contained" onPress={handleSubmit}>
              Gönder
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default IletisimForm;