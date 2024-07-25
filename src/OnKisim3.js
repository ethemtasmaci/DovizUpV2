import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import BulutYukariSvg from '../svg/BulutYukariSvg'
import BulutAssaSvg from '../svg/BulutAssaSvg'
import OnKisim1Svg from '../svg/OnKisim1Svg'
import IleriSvg from '../svg/IleriSvg'
import OnKisim2Svg from '../svg/OnKisim2Svg'
import OnKisim3Svg from '../svg/OnKisim3Svg'

const OnKisim3 = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                flex: 1, // Ana View'i tüm ekrana yay
                justifyContent: 'space-between', // Üst ve altta boşluk bırak

            }}>
                <BulutYukariSvg height={180} width={'100%'} />

                <OnKisim3Svg height={350} width={350} style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 0,
                }} />

                <Text style={{
                    fontSize: 27,
                    fontFamily: 'Lota',
                    color: '#000',
                    textAlign: 'center',
                    marginBottom: 10,
                }}>
                    Dövizlerin Hareketleri
                </Text>

                <Text style={{
                    width: '60%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: '#000',
                    textAlign: 'center',
                    marginBottom: 10,
                    fontSize: 13,
                    fontFamily: 'Lota',
                    textAlign: 'center',

                }}>
                    En güvenilir ve en hızlı döviz hareketleri
                    DövizUp
                </Text>

                <BulutAssaSvg height={300} width={'100%'} fill={'#E43A19'} />
                <View style={{
                    marginTop: 740,
                    marginLeft: 155,
                    marginBottom: 10,
                    flexDirection: 'row',
                    position: 'absolute',
                }}>
                    <View style={{
                        marginTop: 16,
                        marginRight: 30,
                        marginLeft: 16,
                        flexDirection: 'row',
                    }}>
                        <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: '#C6C5C5', marginRight: 10, position: 'relative' }} />
                        <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: '#C6C5C5', position: 'relative' }} />
                        <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: '#000', marginRight: 10, position: 'relative' }} />
                    </View>
                    <TouchableOpacity onPress={() => handleMenuPress('Anasayfa')}>
                        <IleriSvg height={47} width={47} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}


export default OnKisim3