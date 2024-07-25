import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Appbar, Portal, Modal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // useNavigation sadece bir kez import edilmelidir

import Menu from '../components/Menu';
import DonusturSvg from '../svg/DonusturSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';
// import FiltreSvg from '../svg/FiltreSvg';
// import AdminSvg from '../svg/AdminSvg'; // Bu SVG'yi kullanmıyorsunuz gibi görünüyor, gereksiz importten kaçının

const AdminGiris = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorCount, setErrorCount] = useState(0);
    const [isAccountLocked, setAccountLocked] = useState(false);

    const navigation = useNavigation(); // useNavigation sadece bir kez kullanılmalıdır

    const handleLogin = () => {
        if (isAccountLocked) {
            Alert.alert('Hesap Kilitli', 'Hesabınız kilitlendi, lütfen bir süre sonra tekrar deneyin.');
            navigation.navigate('Anasayfa'); // Hesap kilitlendiğinde anasayfaya yönlendirme
            return;
        }

        if (username === 'admin' && password === 'ljajans0208') {
            navigation.navigate('AdminHaber');
            setErrorCount(0);
        } else {
            const newErrorCount = errorCount + 1;
            setErrorCount(newErrorCount);
            if (newErrorCount >= 5) {
                setAccountLocked(true);
                setTimeout(() => {
                    setAccountLocked(false);
                    setErrorCount(0);
                }, 5 * 60 * 1000); // Saniye cinsinden 5 dakika
            }
            Alert.alert('Bilgiler Yanlış!', 'Kullanıcı adı veya şifre hatalı girdiniz lütfen sonra tekrar deneyiniz.');
        }
    };
    return (
        <View style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#476072',
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
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('HesapMakinasi')}>
                        <HesapMakinasiSvg />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('Donustur')}>
                        <DonusturSvg />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                backgroundColor: '#334257',
                height: '80%',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10,
                marginTop: 50
            }}>
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: '800',
                    fontSize: 16,
                    marginTop: 80,
                    marginBottom: 20
                }}>
                    Admin Girişi
                </Text>
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        borderColor: '#EEEEEE',
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: 10,
                        color: '#fff'
                    }}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    placeholder="Kullanıcı Adı"
                />

                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        borderColor: '#EEEEEE',
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: 10,
                        color: '#fff',
                        marginTop: 40,
                        marginBottom: 20
                    }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder="Şifre"
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={handleLogin}
                    style={{
                        backgroundColor: '#476072',
                        borderColor: '#EEEEEE',
                        borderWidth: 2,
                        width: 130,
                        height: 40,
                        borderRadius: 12,
                        justifyContent: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 50
                    }}>
                    <Text style={{
                        color: '#EEEEEE',
                        textAlign: 'center',
                    }}>Giriş</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default AdminGiris