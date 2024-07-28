import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Appbar, Button, Menu, Dialog, Paragraph, Portal, Snackbar } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { parseString } from 'react-native-xml2js';


import Menus from '../components/Menu';

// import FiltreSvg from '../svg/FiltreSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
import DonusturSvg from '../svg/DonusturSvg';
import { ExclusiveGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gestureComposition';
import AnaMenu from '../components/AnaMenu';

const DonusturEski = () => {
    const navigation = useNavigation();

    const [visible, setVisible] = useState(false);
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCurrency1, setSelectedCurrency1] = useState(null);
    const [selectedCurrency2, setSelectedCurrency2] = useState(null);
    const [exchangeRate1, setExchangeRate1] = useState({ buying: null, selling: null });
    const [exchangeRate2, setExchangeRate2] = useState({ buying: null, selling: null });
    const [inputExchangeRate, setInputExchangeRate] = useState({ buying: 0, selling: 0 });

    const [firstCurrencyMenuVisible, setFirstCurrencyMenuVisible] = useState(false);
    const [secondCurrencyMenuVisible, setSecondCurrencyMenuVisible] = useState(false);

    const openFirstCurrencyMenu = () => setFirstCurrencyMenuVisible(true);
    const closeFirstCurrencyMenu = () => setFirstCurrencyMenuVisible(false);

    const openSecondCurrencyMenu = () => setSecondCurrencyMenuVisible(true);
    const closeSecondCurrencyMenu = () => setSecondCurrencyMenuVisible(false);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.tcmb.gov.tr/kurlar/today.xml")
            .then(response => {
                parseString(response.data, (error, result) => {
                    if (error) {
                        console.error("XML çevirme hatası:", error);
                        return;
                    }
                    const currencies = result?.Tarih_Date?.Currency;
                    const userData = currencies.map(currency => ({
                        label: currency.Isim, // Döviz ismi
                        value: currency.$.Kod, // Döviz kodu
                        buyings: currency.ForexBuying,
                        sellings: currency.ForexSelling
                    }));
                    setUserData(userData);
                });
            })
            .catch(error => console.log("Veri çekerken hata oluştu!", error));
        if (errorMessage) {
            setErrorVisible(true);
        }
    }, [errorMessage]);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleSelectItem1 = (item, userData) => {
        try {
            setSelectedItem(item);
            const currency = userData.find(currency => currency.value === item.value);
            if (currency) {
                setSelectedCurrency1(currency);
                const buying = parseFloat(currency.buyings);
                const selling = parseFloat(currency.sellings);
                if (!isNaN(buying) && !isNaN(selling)) {
                    setExchangeRate1({ buying, selling });
                } else {
                    throw new Error("Döviz alış veya satış fiyatları geçersiz.");
                }
            } else {
                throw new Error("Seçilen döviz bilgisi bulunamadı.");
            }
        } catch (error) {
            console.error("Hata oluştu:", error.message);
        }
    };

    const handleSelectItem2 = (item, userData) => {
        try {
            setSelectedItem(item);
            const currency = userData.find(currency => currency.value === item.value);
            if (currency) {
                setSelectedCurrency2(currency);
                const buying = parseFloat(currency.buyings);
                const selling = parseFloat(currency.sellings);
                if (!isNaN(buying) && !isNaN(selling)) {
                    setExchangeRate2({ buying, selling });
                } else {
                    throw new Error("Döviz alış veya satış fiyatları geçersiz.");
                }
            } else {
                throw new Error("Seçilen döviz bilgisi bulunamadı.");
            }
        } catch (error) {
            console.error("Hata oluştu:", error.message);
        }
    };

    // const handleInputChange = (text) => {
    //     try {
    //         const inputValue = parseFloat(text);
    //         if (!selectedCurrency1 || !selectedCurrency2) {
    //             throw new Error("Seçili para birimleri eksik. Lütfen iki para birimi seçin.");
    //         }
    //         if (isNaN(inputValue)) {
    //             throw new Error("Girilen değer geçersiz.");
    //         }
    //         const buying1 = parseFloat(exchangeRate1.buying);
    //         const selling1 = parseFloat(exchangeRate1.selling);
    //         const buying2 = parseFloat(exchangeRate2.buying);
    //         const selling2 = parseFloat(exchangeRate2.selling);
    //         if (!isNaN(buying1) && !isNaN(selling1) && !isNaN(buying2) && !isNaN(selling2)) {
    //             if (buying1 !== null && selling1 !== null && buying2 !== null && selling2 !== null) {
    //                 const buyingResult = inputValue * (buying1 / buying2);
    //                 const sellingResult = inputValue * (selling1 / selling2);
    //                 setInputExchangeRate({ buying: buyingResult, selling: sellingResult });
    //             } else {
    //                 throw new Error("Döviz kurları eksik veya geçersiz.");
    //             }
    //         } else {
    //             throw new Error("Döviz kurları geçersiz.");
    //         }
    //     } catch (error) {
    //         console.error("Hata oluştu:", error.message);
    //         setInputExchangeRate({ buying: 0, selling: 0 });
    //         setErrorVisible(true);
    //         setErrorMessage(error.message);
    //     }
    // };

    const handleFirstInputChange = (text) => {
        try {
            const inputValue = parseFloat(text);
            if (!selectedCurrency1 || !selectedCurrency2) {
                throw new Error("Seçili para birimleri eksik. Lütfen iki para birimi seçin.");
            }
            if (isNaN(inputValue)) {
                throw new Error("Girilen değer geçersiz.");
            }
            const buying1 = parseFloat(exchangeRate1.buying);
            const selling1 = parseFloat(exchangeRate1.selling);
            const buying2 = parseFloat(exchangeRate2.buying);
            const selling2 = parseFloat(exchangeRate2.selling);
            if (!isNaN(buying1) && !isNaN(selling1) && !isNaN(buying2) && !isNaN(selling2)) {
                if (buying1 !== null && selling1 !== null && buying2 !== null && selling2 !== null) {
                    const buyingResult = inputValue * (buying1 / buying2);
                    const sellingResult = inputValue * (selling1 / selling2);
                    setInputExchangeRate({ buying: buyingResult, selling: sellingResult });
                } else {
                    throw new Error("Döviz kurları eksik veya geçersiz.");
                }
            } else {
                throw new Error("Döviz kurları geçersiz.");
            }
        } catch (error) {
            console.error("Hata oluştu:", error.message);
            setInputExchangeRate({ buying: 0, selling: 0 });
            setErrorVisible(true);
            setErrorMessage(error.message);
        }
    };

    const handleSecondInputChange = (text) => {
        try {
            const inputValue = parseFloat(text);
            if (!selectedCurrency1 || !selectedCurrency2) {
                throw new Error("Seçili para birimleri eksik. Lütfen iki para birimi seçin.");
            }
            if (isNaN(inputValue)) {
                throw new Error("Girilen değer geçersiz.");
            }
            const buying1 = parseFloat(exchangeRate1.buying);
            const selling1 = parseFloat(exchangeRate1.selling);
            const buying2 = parseFloat(exchangeRate2.buying);
            const selling2 = parseFloat(exchangeRate2.selling);
            if (!isNaN(buying1) && !isNaN(selling1) && !isNaN(buying2) && !isNaN(selling2)) {
                if (buying1 !== null && selling1 !== null && buying2 !== null && selling2 !== null) {
                    const buyingResult = inputValue * (buying1 / buying2);
                    const sellingResult = inputValue * (selling1 / selling2);
                    setInputExchangeRate({ buying: buyingResult, selling: sellingResult });
                } else {
                    throw new Error("Döviz kurları eksik veya geçersiz.");
                }
            } else {
                throw new Error("Döviz kurları geçersiz.");
            }
        } catch (error) {
            console.error("Hata oluştu:", error.message);
            setInputExchangeRate({ buying: 0, selling: 0 });
            setErrorVisible(true);
            setErrorMessage(error.message);
        }
    };


    const showDialog = () => setErrorVisible(true);
    const hideDialog = () => setErrorVisible(false);
    return (
        <View style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#476072',
        }}>
           <AnaMenu />

            <View style={{
                backgroundColor: '#334257',
                height: '85%',
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
                        marginTop: 40,
                        textAlign: 'center'
                    }}>
                        Kur Karşılaştırma
                    </Text>

                    <Text style={{
                        color: '#fff',
                        width: '80%',
                        fontSize: 15,
                        marginTop: 10,
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>Seçtiğiniz para biriminin değeri alt tarafta yazmaktadır.</Text>
                    <View style={{
                        backgroundColor: '#476072',
                        width: '90%',
                        height: 80,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: 20,
                        marginTop: 20
                    }}>

                        <View style={styles.container}>
                            {/* İlk para birimini seçme */}
                            <View style={{}}>
                                <Menu
                                    visible={firstCurrencyMenuVisible}
                                    onDismiss={closeFirstCurrencyMenu}
                                    anchor={<Button onPress={openFirstCurrencyMenu} textColor='#fff'>İlk para birimini seçin</Button>}
                                >
                                    {userData.map((item, index) => (
                                        <Menu.Item key={index} onPress={() => handleSelectItem1(item, userData)} title={item.value} />
                                    ))}
                                </Menu>
                                {/* İlk para birimi seçildiğinde buraya yazılacak */}
                                {selectedCurrency1 && (
                                    <>
                                        <Text style={{
                                            color: '#fff', backgroundColor: '#334257', borderRadius: 12, width: 80, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', height: 30, paddingTop: 5
                                        }}>{exchangeRate1.selling}</Text>
                                    </>
                                )}
                            </View>

                            {/* İkinci para birimini seçme */}
                            <View>
                                <Menu
                                    visible={secondCurrencyMenuVisible}
                                    onDismiss={closeSecondCurrencyMenu}
                                    anchor={<Button onPress={openSecondCurrencyMenu} textColor='#fff'>İkinci para birimini seçin</Button>}
                                >
                                    {userData.map((item, index) => (
                                        <Menu.Item key={index} onPress={() => handleSelectItem2(item, userData)} title={item.value} />
                                    ))}
                                </Menu>
                                {/* İkinci para birimi seçildiğinde buraya yazılacak */}
                                {selectedCurrency2 && (
                                    <>
                                        <Text style={{
                                            color: '#fff', backgroundColor: '#334257', borderRadius: 12, width: 80, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', height: 30, paddingTop: 5
                                        }}>{exchangeRate2.selling}</Text>
                                    </>
                                )}
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{
                    width: '80%',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: 10,
                    marginBottom: 10,
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        color: '#fff',
                    }}>
                        Günlük Döviz Farkı (%)
                    </Text>
                    <Text style={{
                        color: '#fff',
                        marginLeft: 'auto'
                    }}>
                        10%
                    </Text>
                </View>

                <View style={{
                    backgroundColor: '#476072',
                    width: '90%',
                    height: 300,
                    borderRadius: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <Text style={{
                        margin: 20,
                        color: '#fff'
                    }}>
                        Günlük Kur Para Değişimi
                    </Text>

                    <View style={{ width: '100%', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
                            <TextInput
                                style={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    borderBottomWidth: 2,
                                    width: '38%',
                                    marginRight: 10
                                }}
                                placeholder="İlk değeri girin"
                                value='1'
                                keyboardType='numeric'
                                onChangeText={handleFirstInputChange}
                            />

                            {/* Kullanıcının ikinci değeri girdiği TextInput */}
                            <TextInput
                                style={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    borderBottomWidth: 2,
                                    width: '40%',
                                }}
                                placeholder="İkinci değeri girin"
                                keyboardType='numeric'
                                onChangeText={handleSecondInputChange}
                            />
                        </View>

                        {/* İşlem sonucunun gösterildiği kısım */}
                        <View style={{ flexDirection: 'row', width: '100%', marginLeft: 'auto', marginRight: 'auto', width: 'auto', marginTop: 30 }}>
                            <View style={{
                                marginRight: 20
                            }}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Alış</Text>
                                <Text style={{ color: '#fff', backgroundColor: '#334257', borderRadius: 12, width: 100, textAlign: 'center', height: 30, paddingTop: 5 }}>{inputExchangeRate.buying}</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Satış</Text>
                                <Text style={{ color: '#fff', backgroundColor: '#334257', borderRadius: 12, width: 100, textAlign: 'center', height: 30, paddingTop: 5 }}>{inputExchangeRate.selling}</Text>
                            </View>
                        </View>
                    </View>

                    <Portal>
                        <Dialog visible={errorVisible} onDismiss={hideDialog}>
                            <Dialog.Title>Hata</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{errorMessage}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={hideDialog}>Tamam</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        marginRight: 20
    }
});
export default DonusturEski