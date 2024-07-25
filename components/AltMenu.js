import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SatisSvg from '../svg/SatisSvg'
import AlisSvg from '../svg/AlisSvg'
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg'
import AnasayfaSvg from '../svg/AnasayfaSvg'
import HaberlerSvg from '../svg/HaberlerSvg'
import { useNavigation } from '@react-navigation/native'

const AltMenu = () => {
    const navigation = useNavigation();
  
    const handleMenuPress = (screenName) => {
      navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                bottom: 0,
                left: 0,
                width: '100%',
                height: 100,
            }}>
                <View style={{
                    width: '100%',
                    height: 80,
                    paddingTop: 12,
                    backgroundColor: '#111F4D',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    justifyContent: 'center',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                    }}>

                        <TouchableOpacity onPress={() => handleMenuPress('Satis')} style={{
                            justifyContent: 'center',
                            width: '18%',
                        }}>
                            <SatisSvg height={30} width={30} fill={'#fff'} style={{ marginRight: 'auto', marginLeft: 'auto' }} />
                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center' }}> Satış </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleMenuPress('Alis')} style={{
                            justifyContent: 'center',
                            width: '18%'
                        }}>
                            <AlisSvg height={30} width={30} fill={'#fff'} style={{ marginRight: 'auto', marginLeft: 'auto' }} />
                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center' }}> Alış </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleMenuPress('Anasayfa')} style={{
                            justifyContent: 'center',
                            width: '18%'
                        }}>
                            <AnasayfaSvg height={30} width={30} fill={'#fff'} style={{ marginRight: 'auto', marginLeft: 'auto' }} />
                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center' }}> Anasayfa </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleMenuPress('Haberler')} style={{
                            justifyContent: 'center',
                            width: '18%'
                        }}>
                            <HaberlerSvg height={30} width={30} fill={'#fff'} style={{ marginRight: 'auto', marginLeft: 'auto' }} />
                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center' }}> Haberler </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleMenuPress('HesapMakinasi')} style={{
                            justifyContent: 'center',
                            width: '18%'
                        }}>
                            <HesapMakinasiSvg height={30} width={30} fill={'#fff'} style={{ marginRight: 'auto', marginLeft: 'auto' }} />
                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center' }}> Hesap Makinasi </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </>
    )
}

export default AltMenu