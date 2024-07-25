import { View, Text } from 'react-native'
import React from 'react'

import Menu from '../components/Menu'
import AltMenu from '../components/AltMenu'
import InstaStorys from '../components/InstaStorys'
import AnasayfaDoviz from '../components/AnasayfaDoviz'
import AnasayfaHaber from '../components/AnasayfaHaber'

const Anasayfa = () => {
    return (
        <>
            <View style={{
                width: '100%',
                height: '100%',
            }}>
                <Menu />

                <View style={{
                    width: '100%',
                    height: '78.7%',
                    backgroundColor: '#020205',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    opacity: 0.15,
                }} />

                <View style={{
                    zIndex: 1000,
                    position: 'absolute',
                    marginTop: 100
                }}>

                    <InstaStorys />

                    <AnasayfaDoviz />

                    <View style={{
                        width: '80%',
                        height: 2,
                        backgroundColor: '#000',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: 15
                    }} />

                    <View style={{
                        width: '80%',
                        height: 2,
                        backgroundColor: '#000',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 70,
                        borderRadius: 15
                    }} />

                    <AnasayfaHaber  />

                </View>

                <AltMenu />

            </View>
        </>
    )
}

export default Anasayfa