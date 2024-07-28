import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BulutYukariSvg from '../svg/BulutYukariSvg';
import BulutAssaSvg from '../svg/BulutAssaSvg';
import OnKisim3Svg from '../svg/OnKisim3Svg';
import IleriSvg from '../svg/IleriSvg';

const OnKisim3 = () => {
  const navigation = useNavigation();

  const handleMenuPress = async screenName => {
    await AsyncStorage.setItem('introSeen', 'true');
    navigation.replace(screenName); // İlgili sayfaya yönlendir
  };

  return (
    <>
      <View
        style={{
          flex: 1, // Ana View'i tüm ekrana yay
          justifyContent: 'space-between', // Üst ve altta boşluk bırak
        }}>
        <BulutYukariSvg height={180} width={'100%'} />

        <OnKisim3Svg
          height={350}
          width={350}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 0,
          }}
        />

        <Text
          style={{
            fontSize: 27,
            fontFamily: 'Lota',
            color: '#000',
            textAlign: 'center',
            marginBottom: 10,
          }}>
          Gelişmiş Hesap Makinesi Özelliği
        </Text>

        <Text
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#000',
            textAlign: 'center',
            marginBottom: 10,
            fontSize: 13,
            fontFamily: 'Lota',
            textAlign: 'center',
          }}>
        Hesap makinesi özelliğimiz ile finansal işlemlerinizi kolayca yönetin. Döviz hesaplamalarından günlük hesaplamalara kadar tüm ihtiyaçlarınız için pratik ve etkili bir çözüm sunuyoruz.
        </Text>

        <BulutAssaSvg height={300} width={'100%'} fill={'#E43A19'} />
        <View
          style={{
            marginTop: 740,
            marginLeft: 155,
            marginBottom: 10,
            flexDirection: 'row',
            position: 'absolute',
          }}>
          <View
            style={{
              marginTop: 16,
              marginRight: 30,
              marginLeft: 16,
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: '#C6C5C5',
                marginRight: 10,
                position: 'relative',
              }}
            />
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: '#C6C5C5',
                marginRight: 10,
                position: 'relative',
              }}
            />
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: '#000',
                position: 'relative',
              }}
            />
          </View>
          <TouchableOpacity onPress={() => handleMenuPress('Anasayfa')}>
            <IleriSvg height={47} width={47} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OnKisim3;
