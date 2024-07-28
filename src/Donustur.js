import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Menus from '../components/Menu';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import DonusturSvg from '../svg/DonusturSvg';
import TurkBayrakSvg from '../svg/TurkBayrakSvg';
import AnaMenu from '../components/AnaMenu';

const Donustur = () => {
    const [firstFiveData, setFirstFiveData] = useState(null);
    const [textInputValue, setTextInputValue] = useState('');
    const navigation = useNavigation();

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

    const calculateValues = (textInputValue) => {
        if (!textInputValue || isNaN(textInputValue)) return null;

        const turkishLiraValue = parseFloat(textInputValue.replace(',', '.')); // Virgülü noktaya çeviriyoruz
        if (isNaN(turkishLiraValue)) return null;

        try {
            const calculatedValues = firstFiveData.satis.map((value, index) => {
                const numericValue = parseFloat(value.replace(',', '.')); // Veriyi virgülle ayrılan kısmı işlemek için noktaya çeviriyoruz
                if (!isNaN(numericValue)) {
                    let calculatedValue;
                    if (numericValue === 0) {
                        // Değer sıfır ise, bir önceki değere eşit olarak kabul et
                        calculatedValue = turkishLiraValue / parseFloat(firstFiveData.satis[index - 1].replace(',', '.'));
                    } else {
                        calculatedValue = turkishLiraValue / numericValue;
                    }
                    return calculatedValue;
                } else {
                    throw new Error(`Hesaplama hatası: Geçersiz değer (${value}) indeks: ${index}`);
                }
            });
            console.log("calcul const", calculatedValues);
            return calculatedValues;
        } catch (error) {
            console.error("Hata:", error.message);
            return null; // Hata oluşursa null döndür
        }
    };




    const renderedSatisValues = (!textInputValue || textInputValue === '') ? firstFiveData && firstFiveData.satis : calculateValues(textInputValue);
    console.log("rend const", renderedSatisValues);

    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: '#476072' }}>

            <AnaMenu />

            <View style={{
                backgroundColor: '#334257',
                height: '90%',
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10,
                marginTop: 10,
            }}>
                <View>
                    <Text style={{
                        color: '#fff',
                        fontWeight: '800',
                        fontSize: 18,
                        marginTop: 20,
                        marginBottom: 30,
                        textAlign: 'center'
                    }}>
                        Kur Karşılaştırma
                    </Text>
                    <ScrollView>
                        <View>
                            <View style={{ flexDirection: 'row', width: '90%', marginRight: 'auto', marginBottom: 20 }}>
                                <TurkBayrakSvg style={{}} />
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginTop: 15
                                }}>Türk</Text>
                                <TextInput
                                    style={{
                                        color: '#fff',
                                        borderColor: '#fff',
                                        backgroundColor: '#476072',
                                        borderWidth: 1,
                                        borderRadius: 12,
                                        height: 40,
                                        textAlign: 'right',
                                        paddingRight: 20,
                                        marginLeft: 'auto',
                                        width: 120,
                                        marginTop: 10
                                    }}
                                    placeholder="1"
                                    keyboardType='numeric'
                                    value={textInputValue}
                                    onChangeText={(text) => {
                                        const numericValue = parseFloat(text);

                                        if (!isNaN(numericValue)) {
                                            setTextInputValue(text);
                                        }
                                    }}
                                />
                            </View>
                        </View>
                        {firstFiveData && firstFiveData.kurIsim.map((kurIsim, index) => (
                            <View key={index} style={{ flexDirection: 'row', width: '90%', marginRight: 'auto', marginBottom: 20 }}>
                                <SvgUri uri={firstFiveData.bayraklar[index]} width="30" height="30" style={{ marginTop: 8, marginLeft: 20 }} />
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    marginLeft: 20,
                                    marginRight: 20,
                                    marginTop: 12
                                }}>{kurIsim}</Text>
                                <Text style={{
                                    height: 40,
                                    width: 120,
                                    color: '#E4E4DF',
                                    fontSize: 16,
                                    borderWidth: 1,
                                    marginLeft: 'auto',
                                    backgroundColor: '#476072',
                                    borderColor: '#fff',
                                    borderRadius: 12,
                                    paddingTop: 8,
                                    textAlign: 'right',
                                    paddingRight: 20,
                                }}>
                                    {renderedSatisValues ?
                                        (isNaN(renderedSatisValues[index]) ? firstFiveData.satis[index] : renderedSatisValues[index].toFixed(3))
                                        : firstFiveData && firstFiveData.satis && firstFiveData.satis[index] && firstFiveData.satis[index].toFixed(3)}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Donustur