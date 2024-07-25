import { View, Text } from 'react-native'
import React from 'react'
import TurkBayrakSvg from '../svg/TurkBayrakSvg'

const AnasayfaDoviz = () => {
    return (
        <>
            <View style={{
                width: '100%',
                height: 300
            }}>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 20
                }}>
                    <TurkBayrakSvg />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '800',
                        marginTop: 15,
                        marginLeft: 20,
                        width: '42%'
                    }}>
                        Türk Lirası
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '800',
                        width: '20%',
                        marginTop: 15,
                    }}>
                        Alış
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '800',
                        width: '20%',
                        marginTop: 15,
                    }}>
                        Satış
                    </Text>
                </View>


                {/* bu kısım apinin geleceği kısım */}
                <View style={{
                    flexDirection: 'row',
                }}>
                    <TurkBayrakSvg />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '800',
                        marginTop: 15,
                        marginLeft: 20,
                        width: '42%'
                    }}>
                        Amerikan Doları
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '800',
                        width: '20%',
                        marginTop: 15,
                    }}>
                        00.000
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '800',
                        width: '20%',
                        marginTop: 15,
                    }}>
                        00.000
                    </Text>
                </View>

            </View>
        </>
    )
}

export default AnasayfaDoviz