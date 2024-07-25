import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TextInput, Button, Alert, PermissionsAndroid, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar, Portal, Modal } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadImageToFirebase, addHaberToFirestore } from '../firebaseConfig';

import YeniSvg from '../svg/YeniSvg';

const HaberEkle = () => {
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState(null);
    const [uploading, setUploading] = useState(false);

    const [imageUrl, setImageUrl] = useState(null);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const checkGalleryPermission = async () => {
        try {
            // Kullanıcıdan izin al
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Galeriye Erişim İzni',
                    message: 'Uygulamanın galeriye erişim izni gerekiyor.',
                    buttonPositive: 'Tamam',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('Galeriye erişim izni verildi (PermissionsAndroid).');

                // Galeriye erişim izni verildiği durumda resim seçme işlemi başlatılabilir
                selectImage();
            } else {
                console.log('Galeriye erişim izni verilmedi.');
            }
        } catch (err) {
            Alert.alert('Galeriye erişim izni kontrol edilirken bir hata oluştu:', err);
        }
    };

    const selectImage = async () => {
        const options = {
            title: 'Resim Seç',
            storageOptions: {
                skipBackup: true,
                path: 'resimUrl',
            },
        };

        try {
            const response = await launchImageLibrary(options);
            Alert.alert('launchImageLibrary response:', response);
            if (response.didCancel) {
                Alert.alert('Resim seçme işlemi iptal edildi');
            } else if (response.error) {
                Alert.alert('Resim seçerken bir hata oluştu:', response.error);
            } else if (response.assets[0].uri) {
                // Seçilen resmin URI'sini alabilirsiniz
                const uri = response.assets[0].uri;
                console.log('Resim URI:', uri); // Resmin URI'sini kontrol et
                // Dosya adını belirleme
                const fileName = uri.substring(uri.lastIndexOf('/') + 1);
                console.log('Resim URL substring', fileName)
                // Seçilen resmin URI'sini state'e at
                setImageUri(uri);
                // Resmi Firebase Storage'a yükle
                const imageUrl = await uploadImageToFirebase(uri, fileName);
                console.log('URL imageUrl', imageUrl)
                setImageUrl(imageUrl);
                Alert.alert('Resim Seçildi', 'Resim başarıyla seçildi ve Firebase Storage a yüklendi!');
            } else {
                Alert.alert('Resim URI bulunamadı.');
            }
        } catch (error) {
            console.log('Resim seçerken bir hata oluştu:', response.error);
        }
    };

    const [text, setText] = useState('');
    const [twoText, setTwoText] = useState('');

    const onChangeText = (text) => {
        setText(text);
    };

    const onTwoChangeText = (twoText) => {
        setTwoText(twoText);
    };

    const saveHaber = async () => {
        try {
            if (!imageUri) {
                throw new Error('Resim URI bulunamadı.');
            }
            const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
            const imageUrl = await uploadImageToFirebase(imageUri, fileName);

            const currentDate = new Date();
            const timestamp = currentDate.toISOString();

            // Başlık, açıklama ve tarih bilgileriyle birlikte Firestore'a ekleme işlemi
            await addHaberToFirestore(text, twoText, imageUrl, timestamp);

            Alert.alert('Başarı', 'Haber başarıyla kaydedildi.');

            navigation.navigate('AdminHaber');
        } catch (error) {
            console.error('Haber kaydı sırasında bir hata oluştu:', error);
            Alert.alert('Hata', 'Haber kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const ustVeri = () => {
        setMenuOpen(false);
    };



    return (
        <View style={{ flex: 0, marginLeft: 'auto' }}>
            <Appbar.Action
                icon={() => <YeniSvg />}
                onPress={toggleMenu}
                subtitle="Subtitle"
                style={styles.appbarAction}
            />
            <Portal>
                <Modal visible={isMenuOpen} onDismiss={ustVeri}>
                    <View style={styles.modalContainer}>
                        <Text style={{
                            color: '#EEEEEE',
                            textAlign: 'center',
                            width: '100%',
                            fontWeight: '800',
                            marginTop: 20
                        }}>
                            Haber Ekle
                        </Text>

                        <Text style={{
                            marginTop: 70,
                            marginBottom: 10,
                            color: '#EEEEEE',
                            textAlign: 'center',
                            fontWeight: '800'
                        }}>
                            Başlık
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                width: 200,
                                marginBottom: 10,
                                borderColor: '#EEEEEE',
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                borderRadius: 10,
                                color: '#fff'
                            }}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Başlık girin"
                        />

                        <Text style={{
                            marginTop: 10,
                            color: '#EEEEEE',
                            textAlign: 'center',
                            fontWeight: '800'
                        }}>
                            Açıklama
                        </Text>
                        <TextInput
                            style={{
                                height: 40,
                                width: 200,
                                borderColor: '#EEEEEE',
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                borderRadius: 10,
                                color: '#fff'
                            }}
                            placeholder="Açıklama girin"
                            onChangeText={onTwoChangeText}
                            value={twoText}
                        />
                        {imageUri && <Image source={{ uri: imageUri }} style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'cover',
                            marginTop: 20,
                            marginBottom: 20,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            borderRadius: 12
                        }} />}

                        <TouchableOpacity style={{
                            backgroundColor: '#476072',
                            borderColor: '#fff',
                            borderWidth: 2,
                            width: 200,
                            height: 40,
                            borderRadius: 12,
                            justifyContent: 'center',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 30
                        }} onPress={checkGalleryPermission}>
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                            }}>Resim Seç</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={saveHaber}
                            style={{
                                backgroundColor: '#476072',
                                borderColor: '#fff',
                                borderWidth: 2,
                                width: 150,
                                height: 50,
                                borderRadius: 12,
                                justifyContent: 'center',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 50
                            }}>
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                            }}>Kaydet</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </Portal>
        </View>
    )
}
const styles = StyleSheet.create({
    appbarAction: {
        height: 50, // Yükseklik için özel prop
        width: 50, // Genişlik için özel prop
    },
    modalContainer: {
        backgroundColor: '#476072',
        padding: 16,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        height: 700,
    },
});

export default HaberEkle