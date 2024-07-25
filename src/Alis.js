import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import { getDoc, doc } from 'firebase/firestore'; // doc fonksiyonunu içe aktar
import { db } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native'

import Menu from '../components/Menu';
// import FiltreSvg from '../svg/FiltreSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import DonusturSvg from '../svg/DonusturSvg';
import ApiFirebase from '../components/ApiFirebase';
import AnaMenu from '../components/AnaMenu';

const Alis = () => {
    const [firstFiveData, setFirstFiveData] = useState(null);
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        setMenuOpen(false); // Menüyü kapat
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "DovizApi", "dovizup_28012024_1");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setFirstFiveData(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error getting document:", error);
            }
        };

        fetchData();
        return () => { };
    }, []);

    if (!firstFiveData) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: '#476072' }}>
                <Text style={{ color: '#fff' }}>Veriler yükleniyor...</Text>
            </View>
        );
    }

    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: '#476072' }}>
            <AnaMenu />
            <ApiFirebase />
            <View style={{ backgroundColor: '#2D394B', height: '90%', width: '95%', marginLeft: 'auto', marginRight: 'auto', borderRadius: 10, marginTop: 10 }}>
                <Text style={{ color: '#EEEEEE', margin: 20 }}>Alış Kur Değerleri</Text>
                <ScrollView contentContainerStyle={{ alignItems: 'center', flexDirection: 'column' }}>
                    {firstFiveData && firstFiveData.kurIsim.map((kurIsim, index) => (
                        <Pressable
                            key={index}
                            style={{
                                width: '85%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginBottom: 20,
                                borderBottomWidth: 1,
                                borderColor: '#334257',
                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <SvgUri uri={firstFiveData.bayraklar[index]} width="30" height="30" />
                                <Text style={{ color: '#E4E4DF', fontSize: 18, fontWeight: '700', marginLeft: 10, width: '70%' }}>{kurIsim}</Text>
                                <Text style={{ color: '#E4E4DF', fontSize: 16, fontWeight: 'bold' }}>{firstFiveData.alis[index]}</Text>
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default Alis;
