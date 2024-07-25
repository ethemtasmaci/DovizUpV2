import { View, Text } from 'react-native'
import React from 'react'

const AnasayfaHaber = () => {
    return (
        <>
            {/* bu sayfada haberler yan yana gelecek  */}
            <View style={{
                width: '102%',
                height: 150,
                marginTop: 25
            }}>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        left: 40
                    }}>
                        <View style={{
                            width: 160,
                            height: 100,
                            backgroundColor: '#D9D9D9',
                            borderRadius: 12,
                            borderColor: '#E43A19',
                            borderWidth: 1
                        }}>
                        </View>

                        <Text style={{
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: '600'
                        }}>Deneme Haber</Text>

                    </View>

                    <View style={{
                        marginLeft: 60
                    }}>
                        <View style={{
                            width: 160,
                            height: 100,
                            backgroundColor: '#D9D9D9',
                            borderRadius: 12,
                            borderColor: '#E43A19',
                            borderWidth: 1
                        }}>

                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: '600'
                        }}>Deneme Haber</Text>
                    </View>

                </View>

            </View>
        </>
    )
}

export default AnasayfaHaber