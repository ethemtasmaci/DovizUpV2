import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SatisSvg from '../svg/SatisSvg';
import AlisSvg from '../svg/AlisSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import AnasayfaSvg from '../svg/AnasayfaSvg';
import HaberlerSvg from '../svg/HaberlerSvg';
import {useNavigation} from '@react-navigation/native';

const AltMenu = ({renk}) => {
  console.log('renk', renk);
  const navigation = useNavigation();

  const handleMenuPress = screenName => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };

  return (
    <>
      <View
        style={{
          position: 'absolute', // AltMenu'nun konumunu sabitle
          zIndex: 2, // AltMenu'nun üstte görünmesini sağlar
          bottom: -20,
          left: 0,
          width: '100%',
          height: 100,
        }}>
        <View
          style={{
            width: '100%',
            height: 80,
            paddingTop: 12,
            backgroundColor: '#111F4D',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}>
            <TouchableOpacity
              onPress={() => handleMenuPress('Satis')}
              style={{
                justifyContent: 'center',
                width: '18%',
              }}>
              <SatisSvg
                height={30}
                width={30}
                fill={renk == 1 ? '#E7371F' : '#fff'}
                style={{marginRight: 'auto', marginLeft: 'auto'}}
              />
              <Text
                style={{
                  color: renk == 1 ? '#E7371F' : '#fff',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                {' '}
                Satış{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleMenuPress('Alis')}
              style={{
                justifyContent: 'center',
                width: '18%',
              }}>
              <AlisSvg
                height={30}
                width={30}
                fill={renk == 2 ? '#E7371F' : '#fff'}
                style={{marginRight: 'auto', marginLeft: 'auto'}}
              />
              <Text
                style={{
                  color: renk == 2 ? '#E7371F' : '#fff',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                {' '}
                Alış{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleMenuPress('Anasayfa')}
              style={{
                justifyContent: 'center',
                width: '18%',
              }}>
              <AnasayfaSvg
                height={30}
                width={30}
                fill={renk == 3 ? '#E7371F' : '#fff'}
                style={{marginRight: 'auto', marginLeft: 'auto'}}
              />
              <Text
                style={{
                  color: renk == 3 ? '#E7371F' : '#fff',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                {' '}
                Anasayfa{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleMenuPress('Haberler')}
              style={{
                justifyContent: 'center',
                width: '18%',
              }}>
              <HaberlerSvg
                height={30}
                width={30}
                fill={renk == 4 ? '#E7371F' : '#fff'}
                style={{marginRight: 'auto', marginLeft: 'auto'}}
              />
              <Text
                style={{
                  color: renk == 4 ? '#E7371F' : '#fff',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                {' '}
                Haberler{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleMenuPress('HesapMakinasi')}
              style={{
                justifyContent: 'center',
                width: '18%',
              }}>
              <HesapMakinasiSvg
                height={30}
                width={30}
                fill={renk == 5 ? '#E7371F' : '#fff'}
                style={{marginRight: 'auto', marginLeft: 'auto'}}
              />
              <Text
                style={{
                  color: renk == 5 ? '#E7371F' : '#fff',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                {' '}
                Hesap Makinasi{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AltMenu;
