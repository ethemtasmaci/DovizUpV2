import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import Menu from '../components/Menu';
import AltMenu from '../components/AltMenu';
import axios from 'axios';

const SorunBildir = () => {
  const [baslik, setBaslik] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [mail, setMail] = useState('');

  const handlePress = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.33:3030/api/issues',
        {
          baslik,
          aciklama,
          email: mail,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      Alert.alert(
        'İletildi',
        `Bizim için yazdığınız metin bize ulaştı ilginiz için teşekkürler.`,
      );
      setBaslik('');
      setAciklama('');
      setMail('');
      if (response.status === 200 && response.data.success) {
        console.log('Gelen yanıt:', response.data);
        console.log('Status kodu:', response.status);
      }
    } catch (error) {
      console.error('Sorun Bildir Ekleme işleminde bir hata oluştu', error);
      Alert.alert(
        'Hata',
        `Sorun Bildir Ekleme işleminde bir hata oluştu: ${error.message}`,
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

        <View
          style={{
            zIndex: 1000,
            position: 'absolute',
            marginTop: 100,
            width: '100%',
          }}>
          <View
            style={{
              width: '100%',
              marginTop: 50,
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '800',
                color: '#000',
                marginBottom: 10,
                textAlign: 'center',
              }}>
              SORUN BİLDİR
            </Text>
            <View
              style={{
                width: '85%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  marginBottom: 30,
                  textAlign: 'left',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                Bi sorununuz veya tavsiyeniz varsa lütfen çekinmeden yazınız
                sizin öneriniz veya eleştiriniz bizim için çök değerli. Teşekkür
                ederimm
              </Text>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000',
                  marginBottom: 5,
                  textAlign: 'left',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                Başlık
              </Text>
              <TextInput
                style={{
                  width: '80%',
                  height: 40,
                  borderWidth: 2,
                  color: '#000',
                  backgroundColor: '#D9D9D9',
                  borderColor: '#E43A19',
                  marginRight: 'auto',
                  borderRadius: 12,
                  paddingHorizontal: 10,
                  marginBottom: 10,
                }}
                value={baslik}
                onChangeText={setBaslik}
              />

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000',
                  marginBottom: 5,
                  textAlign: 'left',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                Açıklama
              </Text>
              <TextInput
                style={{
                  width: '80%',
                  height: 100, // Height büyütüldü
                  borderWidth: 2,
                  color: '#000',
                  backgroundColor: '#D9D9D9',
                  borderColor: '#E43A19',
                  marginRight: 'auto',
                  borderRadius: 12,
                  paddingHorizontal: 10,
                  marginBottom: 10,
                  textAlignVertical: 'top', // Çok satırlı girişi hizala
                }}
                value={aciklama}
                onChangeText={setAciklama}
                multiline={true} // Çok satırlı girişi etkinleştir
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000',
                  marginBottom: 5,
                  textAlign: 'left',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                Mail
              </Text>
              <TextInput
                style={{
                  width: '80%',
                  height: 40,
                  borderWidth: 2,
                  color: '#000',
                  backgroundColor: '#D9D9D9',
                  borderColor: '#E43A19',
                  marginRight: 'auto',
                  borderRadius: 12,
                  paddingHorizontal: 10,
                  marginBottom: 10,
                }}
                value={mail}
                onChangeText={setMail}
              />
            </View>
            <TouchableOpacity
              style={{
                width: 200,
                height: 50,
                backgroundColor: '#EA351D',
                borderRadius: 12,
                marginLeft: 'auto',
                marginRight: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 60, // Daha iyi görünüm için margin eklendi
              }}
              onPress={handlePress}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: '800',
                }}>
                Gönder
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <AltMenu />
      </View>
    </>
  );
};

export default SorunBildir;
