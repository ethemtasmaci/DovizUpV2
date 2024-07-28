import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import React, { useEffect, useState } from 'react'

import HesapMakinasiSvg from '../svg/HesapMakinasiSvg'
import DonusturSvg from '../svg/DonusturSvg'

import Menu from './Menu'

const adUnitId = 'ca-app-pub-9183486928016173/4688827036';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
});

const AnaMenu = () => {
    const [loaded, setLoaded] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
        });

        // Start loading the interstitial straigh t away
        interstitial.load();

        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);

    if (!loaded) {
        return null;
    }

    const handleMenuPress = (screenName) => {
        interstitial.show(); // Reklamı Tetikle
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };

    return (
        <>
            <View style={{
                width: '100%',
                height: '8%',
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
                        <TouchableOpacity style={{ margin: 10 }} onPress={() => handleMenuPress('HesapMakinasi')}>
                            <HesapMakinasiSvg />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 10 }} onPress={() => handleMenuPress('Donustur')}>
                            <DonusturSvg />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default AnaMenu