import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import Menu from '../components/Menu';
import DonusturSvg from '../svg/DonusturSvg';
import HesapMakinasiSvg from '../svg/HesapMakinasiSvg';

import IletisimSvg from '../svg/InstgramSvg';
import BionlukSvg from '../svg/BionlukSvg';
import LinkledinSvg from '../svg/LinkledinSvg';
import AnaMenu from '../components/AnaMenu';

const Iletisim = () => {
    const navigation = useNavigation();


    const handlePress = () => {
        Linking.openURL('https://www.ljajans.com.tr/iletisim');
    };
    return (
        <View>
            <View style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#476072',
            }}>

                <AnaMenu />

                <View style={{
                    backgroundColor: '#334257',
                    height: '80%',
                    width: '95%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: 8,
                    marginTop: 40
                }}>
                    <Text style={{
                        color: '#EEEEEE',
                        marginTop: 60,
                        fontSize: 22,
                        fontWeight: '800',
                        textAlign: 'center'
                    }}>
                        İletişim
                    </Text>

                    <Text style={{
                        color: '#EEEEEE',
                        marginTop: 30,
                        fontSize: 16,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '85%'
                    }}>
                        Bizimle iletişime geçmek için lütfen alttaki buttona basarak geliştirici ekibin sitesine giderek formu doldurup
                        bize ulaşabilirsiniz
                    </Text>

                    <TouchableOpacity onPress={handlePress}>
                        <Text style={{
                            borderRadius: 12,
                            color: '#EEEEEE',
                            borderWidth: 2,
                            borderColor: '#EEEEEE',
                            marginTop: 40,
                            fontSize: 16,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '45%',
                            height: 45,
                            textAlign: 'center',
                            paddingTop: 10,
                        }}>
                            Geliştirici Sitesi
                        </Text>
                    </TouchableOpacity>

                    <Text style={{
                        color: '#EEEEEE',
                        marginTop: 120,
                        fontSize: 18,
                        fontWeight: '600',
                        textAlign: 'center'
                    }}>
                        Sosyal Medya Hesaplarımız
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        width: '40%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                        <Text style={{
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: '#EEEEEE',
                            color: '#EEEEEE',
                            marginTop: 30,
                            fontSize: 16,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 40,
                            height: 40,
                            textAlign: 'center',
                            paddingTop: 10,
                        }}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/ljajansofficial/')}>
                                <IletisimSvg />
                            </TouchableOpacity>

                        </Text>

                        <Text style={{
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: '#EEEEEE',
                            color: '#EEEEEE',
                            marginTop: 30,
                            fontSize: 16,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 40,
                            height: 40,
                            textAlign: 'center',
                            paddingTop: 10,
                        }}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://bionluk.com/ljajansofficial/')}>
                                <BionlukSvg />
                            </TouchableOpacity>
                        </Text>


                        <Text style={{
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: '#EEEEEE',
                            color: '#EEEEEE',
                            marginTop: 30,
                            fontSize: 16,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 40,
                            height: 40,
                            textAlign: 'center',
                            paddingTop: 10,
                        }}>
                            <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/company/ljajansofficial/')}>
                                <LinkledinSvg />
                            </TouchableOpacity>
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    );
};

export default Iletisim;